import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

export default function SignUpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const className = {
    label: cx('form-label text-lg fw-medium color-palette-1 mb-10'),
  }

  const onSubmit = () => {
    const userForm = { name, email, password }

    localStorage.setItem('set-form-user', JSON.stringify(userForm))
    router.push('/sign-up-photo')
  }

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
        <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
        <div className="pt-50">
            <label className={className.label}>Full Name</label>
            <input
              type="text" 
              value={name}
              placeholder="Enter your name"
              className="form-control rounded-pill text-lg"
              onChange={(event) => { setName(event.target.value) }}
            />
        </div>
        <div className="pt-30">
            <label className={className.label}>Email Address</label>
            <input
              type="text" 
              value={email}
              placeholder="Enter your email address"
              className="form-control rounded-pill text-lg"
              onChange={(event) => { setEmail(event.target.value) }}
            />
        </div>
        <div className="pt-30">
            <label className={className.label}>Password</label>
            <input
              type="password" 
              value={password}
              placeholder="Enter your password"
              className="form-control rounded-pill text-lg"
              onChange={(event) => { setPassword(event.target.value) }}
            />
        </div>
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <button
            type="button"
            className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
            onClick={onSubmit}
          >
            Continue
          </button>
          <Link href="/sign-in">
            <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" role="button">
              Sign In
            </a>
          </Link>
        </div>
    </>
  )
}
