/**
 * React Custom Hook
 * useUpdateMetadata
 * 1. update the page path
 * 2. update the page title
 * 3. update the beta badge status
 */
import { useReducer } from 'react'

import appReducer, { updateBadgeStatus, updatePagePath, updatePathTitle } from '../features/page/appSlice'

export const useUpdateMetadata = () => {
  const [state, dispatch] = useReducer(appReducer, appReducer.initialState)

  const setPagePath = (path) => {
    dispatch(updatePagePath({ path }))
  }

  const setPageTite = (title) => {
    dispatch(updatePathTitle({ title }))
  }

  const setBadgeStatus = (badge) => {
    dispatch(updateBadgeStatus({ badge }))
  }

  return {
    state,
    setPagePath,
    setPageTite,
    setBadgeStatus
  }
}
