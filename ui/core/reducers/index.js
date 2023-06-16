import k8sConfigReducer from "../features/config/k8sConfigSlice"
import appReducer from "../features/page/appSlice"
import progressReducer from "../features/progress/progressSlice"
import userReducer from "../features/user/userSlice"

export const reducers = {
    page: appReducer,
    progress: progressReducer,
    user: userReducer,
    k8sConfig: k8sConfigReducer,
}