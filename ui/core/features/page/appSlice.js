import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page: {
        path: "",
        title: "",
        isBeta: false
    }
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updatePagePath: (state, action) => {
            state.page.path = action.payload.action
        },
        updatePathTitle: (state, action) => {
            state.page.title = action.payload.title
        },
        updateBadgeStatus: (state, action) => {
            state.page.isBeta = action.payload.isBeta
        }
    }
})

export const { updatePagePath, updatePathTitle, updateBadgeStatus } = appSlice.actions

export default appSlice.reducer