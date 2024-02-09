import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonThemes{
    CLEAN= 'clean',
    DEFAULT = 'default'
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonThemes;
}
export const Button:React.FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonThemes.DEFAULT,
        children,
        ...otherProps
    } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
