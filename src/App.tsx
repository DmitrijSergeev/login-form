import { useEffect } from 'react'

import s from './App.module.scss'

import { LoginForm } from './components/auth/login-form'
import { fetchUsers } from './modules/users/usersSlice'
import { useAppDispatch, useAppSelector } from './store/store'
export function App() {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <ul>
        <LoginForm />
        {users.map(u => {
          return (
            <div className={s.userlist} key={u.id}>
              <button type={'button'}>+</button>
              <li className={s.u} key={u.id}>
                {u.name}
              </li>
            </div>
          )
        })}
      </ul>
      Hello
    </div>
  )
}
