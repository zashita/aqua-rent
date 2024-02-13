import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

export interface LoginFormProps{
    className?: string;
}
export const LoginForm:React.FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus />
            <Input />
            <Button theme={ButtonThemes.DEFAULT}>
                {t('Войти')}
            </Button>

        </div>
    );
};
