import React, { useEffect, useState } from 'react'
import { jwt } from './cart'

import Login from './Login'
import MiniCart from './MiniCart'

export default function CartContent() {
  const [token, setToken] = useState('')

  useEffect(() => {
    return jwt.subscribe((value) => setToken(value ?? ''))
  }, [])


  return (
    <>
      <div>JWT: {token}</div>
      <Login />
      <MiniCart />
    </>
  )
}
