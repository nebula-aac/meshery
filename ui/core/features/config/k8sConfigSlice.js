import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import dataFetch, { promisifiedDataFetch } from '@/core/utils/dataFetch'

export const loadActiveK8sContexts = createAsyncThunk(
  'kubernetes/loadActiveContexts',
  async (_, thunkAPI) => {
    try {
      const res = await promisifiedDataFetch('/api/system/sync')
      if (res?.k8sConfig) {
        return res.k8sConfig
      } else {
        throw new Error('No Kubernetes configurations found')
      }
    } catch (error) {
      console.error('An error occurred while loading k8sconfig', error)
      // Throwing the error will make it available in the rejected action payload
      throw error
    }
  }
)

export const deleteKubernetesConfig = createAsyncThunk(
  'kubernetes/deleteConfig',
  async ({ id }, thunkAPI) => {
    const { sucessCallback, errorCallback } = thunkAPI.extra

    await dataFetch(
            `/api/system/kubernetes/contexts/${id}`,
            {
              method: 'DELETE',
              credentials: 'include'
            },
            sucessCallback,
            errorCallback
    )
  }
)

const k8sConfigSlice = createSlice({
  name: 'k8sConfig',
  initialState: [],
  reducers: {
    updateK8SConfig: (state, action) => {
      return action.payload.k8sConfig
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadActiveK8sContexts.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(deleteKubernetesConfig.fulfilled, (state, action) => {
        return action.payload
      })
  }
})

export const { updateK8SConfig } = k8sConfigSlice.actions
export default k8sConfigSlice.reducer
