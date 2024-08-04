import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'

import { apiUsers } from '../../api/api'

type Geo = {
  lat: string
  lng: string
}

type Address = {
  city: string
  geo: Geo
  street: string
  suite: string
  zipcode: string
}

type Company = {
  bs: string
  catchPhrase: string
  name: string
}

type User = {
  address: Address
  company: Company
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export type UsersType = User

const initialState: UsersType[] = []

const slice = createSlice({
  initialState: {},
  name: '',
  reducers: {},
})

export const userReducer = (state = initialState, action: ActionsType): UsersType[] => {
  switch (action.type) {
    case 'SET_USERS':
      return action.users.map(u => ({ ...u }))
    default:
      return state
  }
}
export const setUsersAC = (users: UsersType[]) => {
  return {
    type: 'SET_USERS' as const,
    users,
  }
}

export const fetchUsers = () => {
  return (dispatch: Dispatch<ActionsType>) => {
    apiUsers.getUsers().then(res => {
      dispatch(setUsersAC(res.data))
    })
  }
}

export type SetUsers = ReturnType<typeof setUsersAC>

type ActionsType = SetUsers
