import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

export interface NavbarProps{
    className?: string;
}
export const Navbar:React.FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('translation');
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const [authModal, setAuthModal] = useState(false);
    const toggleModal = useCallback(() => {
        setAuthModal((prevState) => !prevState);
    }, []);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <AppLink
                    to="/"
                    theme={AppLinkThemes.INVERTED}
                >
                    {t('Главная')}

                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkThemes.INVERTED}
                >
                    {t('О сайте')}
                </AppLink>
                <Button
                    theme={ButtonThemes.CLEAR}
                    className={cls.Button}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>

            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink
                to="/"
                theme={AppLinkThemes.INVERTED}
            >
                {t('Главная')}

            </AppLink>
            <AppLink
                to="/about"
                theme={AppLinkThemes.INVERTED}
            >
                {t('О сайте')}
            </AppLink>
            <Button
                theme={ButtonThemes.CLEAR}
                className={cls.Button}
                onClick={toggleModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={authModal}
                onClose={toggleModal}
            />

        </div>
    );
};
