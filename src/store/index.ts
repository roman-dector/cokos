import {
  configureStore,
  combineReducers,
  AnyAction,
  ThunkDispatch,
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'

import { authModel, usersModel, currentUserModel } from './features'

export const store = configureStore({
  reducer: combineReducers({
    auth: authModel.reducer,
    users: usersModel.reducer,
    currenUser: currentUserModel.reducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<
  RootState,
  unknown,
  AnyAction
>
