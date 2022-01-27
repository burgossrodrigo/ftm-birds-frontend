import { createContext, useReducer } from 'react'

const initialState = { openWallet: false };
type AppState = typeof initialState

type ACTIONTYPE =
  | { type: "OPEN_WALLET"; payload: boolean }
  | { type: "CLOSE_WALLET"; payload: boolean };

function reducer(state: AppState, action: ACTIONTYPE) {
  switch (action.type) {
    case "OPEN_WALLET":
      return { openWallet: true };
    case "CLOSE_WALLET":
      return { openWallet: false };
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