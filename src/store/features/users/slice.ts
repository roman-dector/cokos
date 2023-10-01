import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getUsers } from './operations'
import { User } from '@/dal/api'

const initialState: { users: User[] } = {
  users: [],
}

const users = createSlice({
  name: 'feature-users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
  },
})

export default users
