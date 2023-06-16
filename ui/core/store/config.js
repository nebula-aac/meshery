import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { RESET_STATE_ACTION_TYPE } from "../actions/resetState"
import { wrapMakeStore } from "next-redux-cookie-wrapper"
import { reducers } from "../reducers"

const combinedReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
    if (action.type === RESET_STATE_ACTION_TYPE) {
        state = {}
    }
    return combinedReducer(state, action)
}

const makeStore = wrapMakeStore(() =>
    configureStore({
        reducer: rootReducer,
        middleware: gdm => gdm().concat(),
    }),
);



export const wrapper = createWrapper(makeStore, { debug: true })