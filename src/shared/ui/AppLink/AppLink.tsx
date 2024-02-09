import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkThemes{
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

export interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkThemes;
}
export const AppLink:React.FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = AppLinkThemes.PRIMARY,
        children,
        ...otherProps
    } = props;
    return (
        <Link
            to = {to}
            className={classNames(cls.AppLink, {}, [className , cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

