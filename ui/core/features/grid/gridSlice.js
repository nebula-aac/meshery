import { createSlice } from '@reduxjs/toolkit'

const initialGridProps = { xl: 4, md: 6, xs: 12 }

const gridSlice = createSlice({
  name: 'grid',
  initialState: {
    gridProps: initialGridProps
  },
  reducers: {
    updateGridProps: (state, action) => {
      state.gridProps = action.payload
    }
  }
})

export const { updateGridProps } = gridSlice.actions

export default gridSlice.reducer
