import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getValue } from './operations'

interface Example {
  value: string
}

const initialState: Example = {
  value: '',
}

const exampleSlice = createSlice({
  name: 'feature-example',
  initialState,
  reducers: {
    changeValue(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getValue.pending, (state, action) => {})
      .addCase(getValue.fulfilled, (state, action) => {})
      .addCase(getValue.rejected, (state, action) => {})
  },
})

export default exampleSlice
