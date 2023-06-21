import k8sConfigReducer from '../features/config/k8sConfigSlice'
// import appReducer from '../features/page/appSlice'
import filtersGridReducer from '../features/filters/filtersGridSlice'
import filtersReducer from '../features/filters/filtersSlice'
import gridReducer from '../features/grid/gridSlice'
import modalReducer from '../features/modal/modalSlice'
import progressReducer from '../features/progress/progressSlice'
import transformReducer from '../features/transform/transformSlice'
import userReducer from '../features/user/userSlice'

export const reducers = {
  // page: appReducer,
  filters: filtersReducer,
  filtersGrid: filtersGridReducer,
  grid: gridReducer,
  modal: modalReducer,
  progress: progressReducer,
  transform: transformReducer,
  user: userReducer,
  k8sConfig: k8sConfigReducer
}
