import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

export interface NavbarProps{
    className?: string;
}
export const Navbar:React.FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('translation');
    const [authModal, setAuthModal] = useState(false);
    const toggleModal = useCallback(() => {
        setAuthModal((prevState) => !prevState);
    }, []);
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
                theme={ButtonThemes.CLEAN}
                className={cls.Button}
                onClick={toggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={authModal}
                onClose={toggleModal}
            >
                <p className={cls.Text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloremque enim harum ipsum nemo quo repudiandae sapiente sint? Animi atque aut blanditiis deleniti, eveniet excepturi exercitationem expedita fuga ipsam ipsum iure libero magnam quas similique tenetur voluptates, voluptatibus.
                </p>
            </Modal>

        </div>
    );
};
