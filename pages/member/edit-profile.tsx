/* eslint-disable max-len */
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-one-expression-per-line */
import Input from '../../components/atoms/input';
import Sidebar from '../../components/organisms/sidebar';
import { updateProfile } from '../../services/service/player'

import baseURL from '../../services/index'

export default function EditProfile() {
  const [imagePreview, setImagePreview] = useState('')
  const [player, setPlayer] = useState({
    name: '',
    email: '',
    avatar: '',
  })

  const router = useRouter()
  const onSubmit = async () => {
    const data = new FormData();

    data.append('name', player.name);
    data.append('image', player.avatar);

    const response = await updateProfile(data)

    if (response.error) {
      toast.error(response.message)
    } else {
      toast.success('Update profile is successfully');
    
      Cookies.remove('uglyTokenGG');
      router.push('/sign-in');
    }
  }
  
  useEffect(() => {
    const uglyToken = Cookies.get('uglyTokenGG')
    
    if (uglyToken) {
      const token = atob(uglyToken)
      const user: any = jwtDecode(token)
      const dataPlayer = user.player
      const currentProfileSrc = `${baseURL}/uploads/${dataPlayer.avatar}`

      setPlayer(dataPlayer)
      setImagePreview(currentProfileSrc)
    }
  }, [])
  return (
    <section className="edit-profile overflow-auto">
        <Sidebar activeMenu="editProfile" />
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form>
                        <div className="photo d-flex">
                            {/* <div className="position-relative me-20">
                                <img src="/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" alt="avatar" />
                                <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                                    <img src="/icon/upload.svg" className="img-fluid" width={90} height={90} alt="upload" />
                                </div>
                            </div> */}
                            <div className="image-upload">
                                <label htmlFor="avatar">
                                    <img
                                        src={imagePreview}
                                        className="img-fluid"
                                        width={90}
                                        height={90}
                                        alt="current_profile"
                                        style={{ borderRadius: '100%' }}
                                    />
                                </label>
                                <input
                                    id="avatar"
                                    type="file"
                                    name="avatar"
                                    accept="image/png, image/jpeg"
                                    onChange={(event: any) => {
                                      const img: any = event.target.files[0];
                                      const imgBlob = URL.createObjectURL(img);
                                      setImagePreview(imgBlob);
                                      setPlayer({
                                        ...player,
                                        avatar: img,
                                      });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="pt-30">
                            <Input
                                type="text"
                                htmlFor="name"
                                label="Full Name"
                                value={player.name}
                                placeholder="input name"
                                onChange={(event: any) => {
                                  setPlayer({
                                    ...player,
                                    name: event.target.value,
                                  })
                                }}
                            />
                        </div>
                        <div className="pt-30">
                            <Input
                                disabled
                                type="email"
                                htmlFor="email"
                                label="Email Address"
                                placeholder="input email"
                                value={player.email}
                            />
                        </div>
                        {/* <div className="pt-30">
                            <Input
                                type="tel"
                                label="Phone"
                                placeholder="Enter your phone number"
                                htmlFor="phone"
                            />
                        </div> */}
                        <div className="button-group d-flex flex-column pt-50">
                            <button
                                type="button"
                                className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                onClick={onSubmit}
                            >
                              Save My Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </section>
  );
}
