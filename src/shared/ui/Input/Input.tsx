import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

export interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string)=> void;
    autofocus?: boolean;
}
export const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autofocus,
    } = props;

    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const { t } = useTranslation();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        return (
            onChange?.(e.target.value)
        );
    };

    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >
            <input
                value={value}
                onChange={onChangeHandler}
                type={type}
                className={cls.Input}
                ref={ref}

            />
        </div>

    );
};
