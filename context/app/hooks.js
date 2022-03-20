import { useContext } from 'react'
import { appStateContext, appDispatchContext } from './context'

export function useAppState() {
  const state = useContext(appStateContext);
  if (!state) throw new Error('[AppContext] State is not found in this context');
  return state;
}

export function useAppDispatcher() {
  const dispatch = useContext(appDispatchContext);
  if (!dispatch) throw new Error('[AppContext] Dispatch is not found in this context');
  return dispatch;
}