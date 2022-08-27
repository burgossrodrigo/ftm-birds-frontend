import { createContext, useReducer } from 'react'

const initialState = { page: 'home' };
type AppState = typeof initialState

type ACTIONTYPE =
  | { type: "PAGE_HOME"; payload: string }

function reducer(state: AppState, action: ACTIONTYPE) {
  switch (action.type) {
    case "PAGE_HOME":
      return { page: 'home' };
    default:
      return state
  }
}



const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<ACTIONTYPE>;
}>({state: initialState, dispatch: () => {} })

export function AppProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext }