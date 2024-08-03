import { useEffect } from 'react'

import { apiUsers } from './api/api'

export function App() {
  useEffect(() => {
    apiUsers.getUsers().then(res => {
      const users = res.data

      console.log(users)
    })
  }, [])

  return <div>Hello</div>
}
