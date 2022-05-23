import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const handleToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const context = {
    theme,
    handleToggle,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}
