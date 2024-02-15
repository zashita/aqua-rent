import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextThemes{
    PRIMARY = 'primary',
    ERROR = 'error'
}

export interface TextProps{
    className?: string;
    title?: string;
    text?: string;
    theme?: TextThemes;
}
export const Text = (props: TextProps) => {
    const { t } = useTranslation();
    const {
        className,
        title,
        text,
        theme = TextThemes.PRIMARY,
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
