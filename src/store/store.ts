import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { ThunkDispatch, UnknownAction, combineReducers, configureStore } from '@reduxjs/toolkit'

import { userReducer } from '../modules/users/usersSlice'

const rootReducer = combineReducers({
  users: userReducer,
})

export const store = configureStore({ reducer: rootReducer })

//export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppRootStateType = ReturnType<typeof rootReducer>

// создаем тип диспатча который принимает как AC так и TC
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, UnknownAction>
//export type AppDispatchType = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
