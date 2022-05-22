import React, { useEffect, useState } from 'react'
import { jwt } from './cart'

import Login from './Login'

export default function CartContent() {
  const [token, setToken] = useState('')

  useEffect(() => {
    return jwt.subscribe((value) => setToken(value ?? ''))
  }, [])


  return (
    <>
      <Login />
      <div>JWT: {token}</div>
    </>
  )
}
