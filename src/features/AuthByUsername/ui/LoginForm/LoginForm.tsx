import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';

export interface LoginFormProps{
    className?: string;
}
export const LoginForm:React.FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type="text" />
            <input type="text" />
            <button />
        </div>
    );
};
