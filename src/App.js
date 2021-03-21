import React, { useState } from 'react';
import FunctionContext from './FunctionContext';
import ClassContext from './ClassContext';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContext />
        <ClassContext />
      </ThemeContext.Provider>
    </>
  )
}

/*
  Context is broken into two sections:
    context.Provider
      - Wraps all of the code that needs access to the context
      - Passes a value, which is essentially the context value
    context.Consumer
      - Inside this, we pass in a function 
        -- that takes in the context value and
        -- returns what to render (e.g., a div with a style based on the context)
*/