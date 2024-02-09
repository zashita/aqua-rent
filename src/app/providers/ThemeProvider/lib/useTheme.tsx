import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "./ThemeContext";

export interface UseThemeResult{
    theme: Themes;
    toggleTheme: () => void;
}
export const useTheme = (): UseThemeResult =>{
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () =>{
        const newTheme: Themes = theme === Themes.DARK?Themes.LIGHT: Themes.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return{
        theme,
        toggleTheme
    }
}
