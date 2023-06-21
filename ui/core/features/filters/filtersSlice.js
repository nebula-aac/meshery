import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const FILTER_URL = '/api/filter'
const DEPLOY_URL = FILTER_URL + '/deploy'
const CLONE_URL = '/clone'
const UNDEPLOY_URL = FILTER_URL + '/undeploy'

export const fetchFilters = createAsyncThunk(
  'filters/fetchFilters',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(FILTER_URL.concat(FETCH_URL), {
        credentials: 'include'
      })
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteFilters = createAsyncThunk(
  'filters/deleteFilters',
  async (filterID, { rejectWithValue }) => {
    try {
      const response = await fetch(FILTER_URL.concat(DELETE_URL, '/', filterID), {
        credentials: 'include',
        method: 'DELETE'
      })
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deployFilters = createAsyncThunk(
  'filters/deployFilters',
  async (filterID, { rejectWithValue }) => {
    try {
      const response = await fetch(FILTER_URL.concat(DEPLOY_URL, '/', filterID), {
        credentials: 'include',
        method: 'PUT'
      })
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const undeployFilters = createAsyncThunk(
  'filters/undeployFilters',
  async (filterID, { rejectWithValue }) => {
    try {
      const response = await fetch(FILTER_URL.concat(UNDEPLOY_URL, '/', filterID), {
        credentials: 'include',
        method: 'PUT'
      })
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const uploadFilters = createAsyncThunk(
  'filters/uploadFilters',
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      const response = await fetch(FILTER_URL.concat(UPLOAD_URL), {
        credentials: 'include',
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const cloneFilter = createAsyncThunk(
  'filters/cloneFilter',
  async ({ filterID, name }, { rejectWithValue }) => {
    try {
      const response = await fetch(FILTER_URL.concat(CLONE_URL, '/', filterID), {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({ name: name + ' (Copy)' })
      })
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const filterSlice = createSlice({
  name: 'filters',
  initialState: [],
  reducers: {
    setFilters: (state, action) => {
      return action.payload
    },
    addFilter: (state, action) => {
      state.push(action.payload)
    },
    removeFilter: (state, action) => {
      return state.filter((filter) => filter.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(deleteFilters.fulfilled, (state, action) => {
        // Remove the deleted filter from state
        return state.filter((filter) => filter.id !== action.payload)
      })
      .addCase(deployFilters.fulfilled, (state, action) => {
        //
      })
      .addCase(undeployFilters.fulfilled, (state, action) => {
        //
      })
      .addCase(uploadFilters.fulfilled, (state, action) => {
        //
      })
      .addCase(cloneFilter.fulfilled, (state, action) => {
        //
      })
  }
})

export const {
  setFilters,
  addFilter,
  removeFilter
} = filterSlice.actions

export default filterSlice.reducer
