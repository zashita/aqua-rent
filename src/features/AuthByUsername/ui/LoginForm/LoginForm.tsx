import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

export interface LoginFormProps{
    className?: string;
}
export const LoginForm = memo((props:LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSubmitClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {error && (
                <div>
                    {' '}
                    {t('Ошибка авторизации')}
                </div>
            )}
            <Input
                autofocus
                placeholder={t('Имя пользователя')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                value={password}
                placeholder={t('Пароль')}
            />
            <Button
                theme={ButtonThemes.OUTLINE}
                onClick={onSubmitClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>

        </div>
    );
});
