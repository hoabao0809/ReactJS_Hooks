import { useContext } from 'react';
import { ContextProvider } from '../store/Provider';

export const useStore = () => {
  const store = useContext(ContextProvider);

  return store;
};
