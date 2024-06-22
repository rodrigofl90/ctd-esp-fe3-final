import { useDentistContext } from "../Context/Context";
import GlobalStyle from '../Styles/GlobalStyle';
import Button from './Button';
import { ThemeProvider } from "styled-components";
import { themes } from '../Context/Context';

const ThemeSelector = ({children}) => {
    const { state, toggleTheme } = useDentistContext();
    const currentTheme = state.theme === 'light' ? themes.light : themes.dark;

    const handleThemeToggle = () => {
        toggleTheme(state.theme === 'light' ? 'dark' : 'light');
    };
    

  return (
   
    <ThemeProvider theme={currentTheme}>
    <GlobalStyle />
    <Button handleClick={handleThemeToggle}>Toggle Theme</Button>
    {children}
  </ThemeProvider>
  );
};

export default ThemeSelector;


