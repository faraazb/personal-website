import React, {createContext, useEffect, useState} from 'react';


const defaultState = {
    theme: '',
    switchTheme: () => {}
}

const ThemeContext = createContext(defaultState);


const ThemeProvider = ({children}) => {
    const isBrowser = typeof window !== 'undefined';
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (isBrowser) {
            let query = window.matchMedia('(prefers-color-scheme: dark)');
            if (query.matches) {
                setTheme('dark');
            }
            else {
                setTheme('light');
            }
        }
    }, [isBrowser])

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
        document.documentElement.className = newTheme;
    }

    return (
        <ThemeContext.Provider value = {{
            theme,
            switchTheme: switchTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext;
export {ThemeProvider};


