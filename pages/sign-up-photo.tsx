import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react'

import { signUp } from '../services/service/auth'
import { getCategories } from '../services/service/player'
import { CategoryTypes } from '../services/data-types/index'

export default function SignUpPhoto() {
  const [favorite, setFavorite] = useState('')
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState('/icon/upload.svg')
  const [dataCategory, setDataCategory] = useState([])
  const [currentValue, setCurrentValue] = useState({
    name: '',
    email: '',
  })

  const router = useRouter()
  const _getCategories = useCallback(async () => {
    const data = await getCategories()

    setDataCategory(data)
    setFavorite(data[0]._id)
  }, [getCategories])

  const onSubmit = () => {
    const stateForm: any = {
      ...currentValue,
      favorite,
      image,
    }

    const data = new FormData();

    data.append('name', stateForm.name);
    data.append('email', stateForm.email);
    data.append('username', stateForm.name);
    data.append('password', stateForm.password);
    data.append('favorite', stateForm.favorite);
    data.append('image', stateForm.image);
    data.append('phoneNumber', '098798876778');
    data.append('role', 'user');

    signUp(data)
    router.push('sign-up-success')
  }

  useEffect(() => {
    const localValue = localStorage.getItem('set-form-user')
    const JSONForm = JSON.parse(localValue ?? '')

    setCurrentValue(JSONForm)
    _getCategories()
  }, [])

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
            <form action="">
                <div className="form-input d-md-block d-flex flex-column">
                    <div>
                        <div className="mb-20">
                            <div className="image-upload text-center">
                                <label htmlFor="avatar">
                                    <Image src={imagePreview} width={120} height={120} className="image-upload" alt="upload" />
                                </label>
                                <input 
                                    id="avatar"
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={(event: any) => {
                                      const img: any = event.target.files[0];
                                      
                                      setImage(img);
                                      setImagePreview(URL.createObjectURL(img));
                                    }}
                                />
                            </div>
                        </div>
                        <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{currentValue.name}</h2>
                        <p className="text-lg text-center color-palette-1 m-0">{currentValue.email}</p>
                        <div className="pt-50 pb-50">
                            <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                                Favorite Game
                            </label>
                            <select
                                value={favorite}
                                className="form-select d-block w-100 rounded-pill text-lg"
                                onChange={(event) => { setFavorite(event.target.value) }}
                            >
                                {
                                dataCategory.map((category: CategoryTypes) => {
                                  return (
                                    <option
                                        key={category._id}
                                        value={category._id}
                                    >
                                        {category.name}
                                    </option>
                                  )
                                })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="button-group d-flex flex-column mx-auto">
                        <button
                            type="button"
                            className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                            onClick={onSubmit}
                        >
                            Create My Account
                        </button>
                        <Link href="/">
                            <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" role="button">
                                Terms & Conditions
                            </a>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </section>
  );
}
