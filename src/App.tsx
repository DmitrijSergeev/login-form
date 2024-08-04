import { useEffect } from 'react'

import s from './App.module.scss'

import { fetchUsers } from './modules/users/usersSlice'
import { useAppDispatch, useAppSelector } from './store/store'
export function App() {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
    console.log(users)
  }, [dispatch])

  return (
    <div>
      <ul>
        {users.map(u => {
          return (
            <li className={s.u} key={u.id}>
              {u.name}
            </li>
          )
        })}
      </ul>
      Hello
    </div>
  )
}
