import React from "react";
import { Provider } from "react-redux";
import store from "./store";

const ReduxProviderWrapper = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
)

export default ReduxProviderWrapper;