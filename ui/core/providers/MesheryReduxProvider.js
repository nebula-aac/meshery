import { Provider } from 'react-redux'

import { wrapper } from '../store/config'

export default function MesheryReduxProvider ({ children, ...rest }) {
  const { store } = wrapper.useWrappedStore(rest)

  console.log('Initial state: ', store.getState())

  return <Provider store={store}>{children}</Provider>
}
