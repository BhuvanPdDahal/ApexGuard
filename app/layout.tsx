import '@styles/globals.css';
import { ReduxProvider } from '@redux/provider';

export const metadata = {
    title: 'ApexGuard',
    description: 'Protect & Manage your money'
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    )
}