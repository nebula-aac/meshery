import appReducer from "../features/page/appSlice"
import userReducer from "../features/user/userSlice"

export const reducers = {
    page: appReducer,
    user: userReducer
}