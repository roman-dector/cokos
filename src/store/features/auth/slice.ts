import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { signin, signup, checkAuth, signout } from './operations'

const initialState = {
  accessToken: '',
  inProgress: false,
}

const auth = createSlice({
  name: 'feature-auth',
  initialState,
  reducers: {
    getState() {
      return initialState
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signout.fulfilled, state => {
        state.accessToken = ''
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.accessToken = action.payload
      })
      .addCase(signup.pending, state => {
        state.inProgress = true
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.accessToken = action.payload
        state.inProgress = false
      })
      .addCase(signin.pending, state => {
        state.inProgress = true
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.accessToken = action.payload
        state.inProgress = false
      })
  },
})

export default auth
