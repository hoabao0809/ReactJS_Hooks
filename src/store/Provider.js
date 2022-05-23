import { createContext, useReducer } from 'react';
import { reducer, initState } from './reducer';
import { logger } from './logger';

export const ContextProvider = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const value = [state, dispatch];

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
