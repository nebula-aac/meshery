import { createSlice } from '@reduxjs/toolkit'

const filtersGridSlice = createSlice({
  name: 'filtersGrid',
  initialState: {
    cloneFilterId: null,
    modalOpen: {
      open: false,
      deploy: false,
      fileFile: null,
      name: '',
      count: 0
    },
    deployedFilters: []
  },
  reducers: {
    setCloneFilterId: (state, action) => {
      state.cloneFilterId = action.payload
    },
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload
    },
    addDeployedFilter: (state, action) => {
      state.deployedFilters.push(action.payload)
    }
  }
})

export const {
  setCloneFilterId,
  setModalOpen,
  addDeployedFilter
} = filtersGridSlice.actions

export default filtersGridSlice.reducer
