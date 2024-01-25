import '@styles/globals.css';

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
                {children}
            </body>
        </html>
    )
}