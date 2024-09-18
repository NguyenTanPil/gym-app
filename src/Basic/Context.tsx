import { createContext, useContext, useState } from 'react';

type ThemeContextType = 'light' | 'dark';

const ThemeContext = createContext<ThemeContextType>('light');

type Props = {};

const Context = (props: Props) => {
  const [theme, setTheme] = useState<ThemeContextType>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

export const ChildComponent = () => {
  const theme = useContext(ThemeContext);
  return <p>Current theme is {theme}</p>;
};

export default Context;
