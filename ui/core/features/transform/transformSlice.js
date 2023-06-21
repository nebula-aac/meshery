import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  transformProperty: ''
}

const transformSlice = createSlice({
  name: 'transform',
  initialState,
  reducers: {
    setTransformProperty: (state, action) => {
      state.transformProperty = state.transformProperty + (action.payload ? action.payload * 3.125 : 0)
    }
  }
})

export const { setTransformProperty } = transformSlice.actions

export default transformSlice.reducer
