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

import { exampleModel } from './features'

export const store = configureStore({
  reducer: combineReducers({
    example: exampleModel.reducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<
  RootState,
  unknown,
  AnyAction
>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const createAppThunk = <Returned = void, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    { state: RootState }
  >,
  options?:
    | AsyncThunkOptions<ThunkArg, { state: RootState }>
    | undefined
) => {
  return createAsyncThunk<Returned, ThunkArg, { state: RootState }>(
    typePrefix,
    payloadCreator,
    options
  )
}
