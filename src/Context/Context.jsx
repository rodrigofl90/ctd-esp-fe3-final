import { createContext, useReducer, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';

export const themes = {
  light: {
    body: '#FFF',
    text: '#000',
    toggleBorder: '#FFF',
    background: '#363537',
  },
  dark: {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
  }
};

const initialState = {
  theme: 'light',
  apiData: null,
};

const actions = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_API_DATA: 'SET_API_DATA',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case actions.SET_API_DATA:
      return {
        ...state,
        apiData: action.payload,  
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({ type: actions.SET_API_DATA, payload: response.data });
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleTheme = () => {
    dispatch({ type: actions.TOGGLE_THEME });
  };

  const contextValue = useMemo(() => ({ state, toggleTheme }), [state]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useDentistContext = () => useContext(AppContext);


 