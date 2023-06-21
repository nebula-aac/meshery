import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return action.payload
    }
  }
})

export const { updateUser } = userSlice.reducer
export default userSlice.reducer
