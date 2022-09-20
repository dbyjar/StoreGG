/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';

import baseURL from '../../../services/index'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false)
  const [player, setPlayer] = useState({
    name: '',
    avatar: '',
  })

  const toggleProfile = () => {
    const dropdownMenu: any = document.getElementById('dropdownMenuLink')
    dropdownMenu.classList.toggle('d-block')
  }

  const router = useRouter()
  const onLogout = () => {
    Cookies.remove('uglyTokenGG')

    router.push('/')
    setIsLogin(false)
  }

  useEffect(() => {
    const uglyToken = Cookies.get('uglyTokenGG')
    
    if (uglyToken) {
      const token = atob(uglyToken)
      const user: any = jwtDecode(token)
      const dataPlayer = user.player

      setIsLogin(true)
      setPlayer(dataPlayer)
    }
  }, [])

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            href="#"
            role="button"
            className="dropdown-toggle ms-lg-40"
            onClick={toggleProfile}
          >
            <img 
              width="40"
              height="40"
              className="rounded-circle"
              alt={player.name}
              src={`${baseURL}/uploads/${player.avatar}`}
            />
          </a>
          <ul className="dropdown-menu border-0" id="dropdownMenuLink">
            <li><Link href="/member"><a className="dropdown-item text-lg color-palette-2">My Profile</a></Link></li>
            <li><Link href="/"><a className="dropdown-item text-lg color-palette-2">Wallet</a></Link></li>
            <li><Link href="/member/edit-profile"><a className="dropdown-item text-lg color-palette-2">Account Settings</a></Link></li>
            <li><a onClick={onLogout} className="dropdown-item text-lg color-palette-2">Log Out</a></li>
          </ul>
        </div>
      </li>
    )
  }

  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" role="button">
          Sign In
        </a>
      </Link>
    </li>
  )
}
