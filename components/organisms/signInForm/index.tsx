import Link from 'next/link'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { signIn } from '../../../services/service/auth'

export default function SignInForm() {
  const labelClassName = 'form-label text-lg fw-medium color-palette-1 mb-10'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const onSubmit = async () => {
    const stateForm: any = {
      email, password,
    }

    if (!email || !password) {
      toast.error('email and password is required')
    } else {
      const response = await signIn(stateForm)
  
      if (response.error) {
        toast.error(response.message)
      } else {
        toast.success('Success Login')

        const { token } = response.data
        const uglyToken = btoa(token)

        Cookies.set('uglyTokenGG', uglyToken, {
          expires: 1,
        })

        router.push('/')
      }
    }
  }

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-50">
          <label className={labelClassName}>Email Address</label>
          <input 
            type="email"
            className="form-control rounded-pill text-lg"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => { setEmail(event.target.value) }}
          />
      </div>
      <div className="pt-30">
          <label className={labelClassName}>Password</label>
          <input 
            type="password"
            className="form-control rounded-pill text-lg"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
          />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
          <button 
            type="button"
            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            onClick={onSubmit}
          >
            Continue to Sign In
          </button>
        <Link href="/sign-up">
          <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill" role="button">
            Sign Up
          </a>
        </Link>
      </div>
    </>
  )
}
