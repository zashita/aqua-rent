import React, {PropsWithChildren, ReactNode, useMemo, useState} from 'react';
import theme from "@storybook/addon-interactions/dist/ts3.9/theme";
import {LOCAL_STORAGE_THEME_KEY
    , Themes,
    ThemeContext} from "../lib/ThemeContext";
 const ThemeProvider:React.FC<PropsWithChildren<ReactNode>> = ({children}) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;
    const [theme, setTheme] = useState<Themes>(defaultTheme)
    const toggleTheme = () =>{
        theme === Themes.DARK?setTheme(Themes.LIGHT): setTheme(Themes.DARK)
    }

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
