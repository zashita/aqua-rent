import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextThemes } from 'shared/ui/Text/Text';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная')}
            <Counter />
            <Input />
            <Text
                title="Боров барни"
            />
            <Text
                text="Боров барни"
                theme={TextThemes.ERROR}
            />

        </div>
    );
};

export default MainPage;
