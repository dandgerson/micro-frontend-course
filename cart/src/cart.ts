import { useEffect, useState } from 'react'
import { BehaviorSubject } from 'rxjs'

const API_SERVER = 'http://localhost:8080'

export const jwt = new BehaviorSubject(null)

export const login = (username: string, password: string): Promise<string> => fetch(`${API_SERVER}/auth/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username,
    password,
  }),
})
  .then((res) => res.json())
  .then(data => {
    jwt.next(data.access_token)

    return data.access_token
  })

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(Boolean(jwt.value))

  useEffect(() => {
    setLoggedIn(Boolean(jwt.value))

    return jwt.subscribe((c) => {
      setLoggedIn(Boolean(jwt.value))
    })
  }, [])

  return loggedIn
}
