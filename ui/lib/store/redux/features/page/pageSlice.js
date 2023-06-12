import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        path: '',
        title: '',
        isBeta: false,
    },
    reducers: {
        updatePagePath: (state, action) => {
            state.page.path = action.payload.path
        },
        updatePageTitle: (state, action) => {
            state.page.title = action.payload.title
        },
        updateBetaBadge: (state, action) => {
            state.page.isBeta = action.payload.isBeta
        }
    }
})

export const { 
    updatePagePath,
    updatePageTitle,
    updateBetaBadge
} = pageSlice.actions

export default pageSlice.reducer