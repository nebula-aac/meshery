import React from "react";
import ReduxProviderWrapper from "./ReduxProviderWrapper";

const withReduxProvider = (Story) => (
    <ReduxProviderWrapper>
        <Story />
    </ReduxProviderWrapper>
)

export default withReduxProvider;