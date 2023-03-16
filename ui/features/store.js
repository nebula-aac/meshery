import { init } from "@rematch/core";
import thunk from "redux-thunk";

export const store = init({
    redux: {
        reducers: {
        },
        middlewares: [thunk]
    }
})