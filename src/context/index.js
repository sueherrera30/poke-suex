import { useReducer, createContext } from "react";

const initialState = {
  loading: false,
  more: true,
  data: [],
  after: 0,
  favourites: null,
};

const Context = createContext();
 
const reducer = (state, action) => {
  switch(action.type){
    case 'START':
    return {...state,  ...action.payload}
    case 'LOADED':
       return {...state,  ...action.payload}
    case 'FAVOURITES':
    return {...state,  ...action.payload}
    default: 
      throw new Error('internet is broken')
  }
}

const Provider = ({ children }) => {
	const [state, dispatch ] = useReducer(reducer, initialState)
	const value = { state, dispatch };

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
