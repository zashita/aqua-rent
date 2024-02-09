import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import ThemeSVG from "shared/assets/Theme/theme-light 1.svg"
import DarkThemeSVG from "shared/assets/Theme/theme-dark 1.svg"
import {Button, ButtonThemes} from "shared/ui/Button/Button"
import {Themes} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'



export interface ThemeSwitcherProps {
    className?: string;

}
export const ThemeSwitcher:React.FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ButtonThemes.CLEAN}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {
                theme === Themes.DARK?
                    <DarkThemeSVG/>:
                    <ThemeSVG/>
            }
        </Button>
    );
};



