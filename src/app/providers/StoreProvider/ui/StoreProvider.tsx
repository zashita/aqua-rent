import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from '../config/StateSchema';

export interface StoreProviderProps{
    children: ReactNode;
    initialState?: StateSchema;
}
export const StoreProvider:React.FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
