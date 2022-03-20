import { useEffect, useReducer, useRef } from 'react'
import { appStateContext, appDispatchContext } from './context'
import ActionCreator from './actionCreator';
import reducer from './reducer';
import initialState from './state'

export default function AppContext({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatcher = new ActionCreator(dispatch);
  const isInitialLoad = useRef(true);
  
  useEffect(() => {
    if (isInitialLoad.current) {
      dispatcher.app.fetchInitialState();
      isInitialLoad.current = false;
    }
  });

  return (
    <appStateContext.Provider value={state}>
      <appDispatchContext.Provider value={dispatcher}>
        {children}
      </appDispatchContext.Provider>
    </appStateContext.Provider>
  );
}