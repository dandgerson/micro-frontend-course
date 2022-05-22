import React, { useState } from "react";

import { login, useLoggedIn } from './cart'

export default function Login() {
  const loggedIn = useLoggedIn()
  const [isLoginShown, setIsLoginShown] = useState(false)

  const [username, setUsername] = useState('sally')
  const [password, setPassword] = useState('123')

  if (loggedIn) return null

  return (
    <>
      <span onClick={() => setIsLoginShown(!isLoginShown)}>
        <i className='ri-fingerprint-line text-2xl' id='isLoginShown'></i>
      </span>

      {isLoginShown && (
        <div
          className='absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black'
          style={{
            width: 300,
            top: '2rem',
            left: -250,
          }}
        >
          <input
            type='text'
            placeholder="User Name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className='border text-sm border-gray-400 p-2 rounded-md w-full'
          />
          <input
            type='password'
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className='border text-sm border-gray-400 p-2 rounded-md w-full'
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md"
            onClick={() => login(username, password)}
            id='loginButton'
          >
            Login
          </button>
        </div>
      )}
    </>
  )
}
