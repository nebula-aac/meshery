import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateProgress = createAsyncThunk(
    'progress/update',
    async ({ showProgress }, thunkAPI) => {
        return { showProgress }
    }
)

export const pingKubernetes = createAsyncThunk(
    'progress/pingKubernetes',
    async ({ id }, { dispatch }) => {
        try {
            dispatch(updateProgress({ showProgress: true }))
            await pingKubernetesOperation(id)
        } catch (error) {
            dispatch(updateProgress({ showProgress: false }))
            throw error
        }
    }
)

const initialState = {
    showProgress: false
}

const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateProgress.fulfilled, (state, action) => {
            state.showProgress = action.payload.showProgress
        })
    }
})

export default progressSlice.reducer