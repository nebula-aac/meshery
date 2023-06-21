import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  tabVal: 0
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true
    },
    closeModal: (state) => {
      state.open = false
    },
    setTabValue: (state, action) => {
      state.tabVal = action.payload
    }
  }
})

export const {
  openModal,
  closeModal,
  setTabValue
} = modalSlice.actions

export default modalSlice.reducer
