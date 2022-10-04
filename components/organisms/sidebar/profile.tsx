import React, { useEffect, useState } from 'react'

import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

import baseURL from '../../../services/index'

export default function Profile() {
  const [player, setPlayer] = useState({
    name: '',
    email: '',
    avatar: '',
  })
  
  useEffect(() => {
    const uglyToken = Cookies.get('uglyTokenGG')
    
    if (uglyToken) {
      const token = atob(uglyToken)
      const user: any = jwtDecode(token)
      const dataPlayer = user.player

      setPlayer(dataPlayer)
    }
  }, [])
  
  return (
    <div className="user text-center pb-50 pe-30">
        <img
          className="img-fluid mb-20"
          width={90}
          height={90}
          src={`${baseURL}/uploads/${player.avatar}`}
          alt="Avatar"
        />
        <h2 className="fw-bold text-xl color-palette-1 m-0">{player.name}</h2>
        <p className="color-palette-2 m-0">{player.email}</p>
    </div>
  )
}
