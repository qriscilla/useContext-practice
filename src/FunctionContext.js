import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';

export default function FunctionContext() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    };

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>Function Theme</div>
        </>
    )
}

/*
    Instead of wrapping the returned value with ThemeContext.Consumer (like we did in ClassContext.js),
    we need to use the useContext hook. This simplifies and saves a lot of lines of code.
*/