import React, {createContext, useState} from 'react';


const defaultState = {
    theme: '',
    switchTheme: () => {}
}

const ThemeContext = createContext(defaultState);


const ThemeProvider = ({children}) => {
    const isBrowser = typeof window !== 'undefined';
    let osTheme = 'light';
    if (isBrowser) {
        osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    const [theme, setTheme] = useState(osTheme);

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


