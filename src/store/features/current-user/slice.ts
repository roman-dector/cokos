import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getValue } from './operations'
import { User, UserCreds } from '@/dal/api'

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  team: '',
  post: '',
  gender: '',
}

const currentUser = createSlice({
  name: 'feature-current-user',
  initialState,
  reducers: {
    setCreds(state, action: PayloadAction<UserCreds>) {
      state.email = action.payload.email
      state.password = action.payload.password
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload
    },
    setUserName(
      state,
      action: PayloadAction<{
        firstname: string
        lastname: string
        team: string
        post: string
      }>
    ) {
      state = { ...state, ...action.payload }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getValue.pending, (state, action) => {})
      .addCase(getValue.fulfilled, (state, action) => {})
      .addCase(getValue.rejected, (state, action) => {})
  },
})

export default currentUser
