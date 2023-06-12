import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { userSlice } from "./features/user/userSlice";
import { themeSlice } from "./features/theme/themeSlice";
import { pageSlice } from "./features/page/pageSlice";
import * as reduxLogger from 'redux-logger';

const logger = reduxLogger.createLogger()

const reducers = {
    [userSlice.name]: userSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
    [pageSlice.name]: pageSlice.reducer,
}

const reducer = combineReducers(reducers)

export const store = () => configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export const wrapper = createWrapper(store, { debug: true })