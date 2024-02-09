import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { App } from './app/App';
import 'shared/config/i18n/i18n';
import { Suspense } from 'react';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import './app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
    <StoreProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <Suspense fallback="">
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    </StoreProvider>,
    document.getElementById('root'),
);
