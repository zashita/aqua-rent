import React, { Suspense, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <Suspense fallback={<div>Loading</div>}>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>

            </Suspense>
        </div>
    );
};
