import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

export interface LangSwitcherProps{
    className?: string;
}
export const LangSwitcher:React.FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'eng' : 'ru');
    };
    return (
        <Button
            theme={ButtonThemes.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={onToggle}
        >
            {t('Язык')}
        </Button>
    );
};
