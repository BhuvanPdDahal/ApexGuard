import '@styles/globals.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducers from '@redux/reducers';

export const metadata = {
    title: 'ApexGuard',
    description: 'Protect & Manage your money'
};

const store = configureStore({ reducer: reducers });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    {children}
                </Provider>
            </body>
        </html>
    )
}