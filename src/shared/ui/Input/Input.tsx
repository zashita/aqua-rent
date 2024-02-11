import React, { InputHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

export interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string)=> void;
}
export const Input:React.FC = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
    } = props;
    const { t } = useTranslation();
    return (
        <input
            className={classNames(cls.Input, {}, [className])}
            value={value}
            onChange={onChange}

        >

        </input>
    );
};
