import React from 'react';
import { MuiThemeProvider } from './styles/MuiThemeProvider';
import './globals.css';
import { ContainerBody } from './containers/ContainerBody';
import { Providers } from './store/provider';

export const metadata = {
    title: 'EventTo',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body>
                <Providers>
                    <MuiThemeProvider>
                        <ContainerBody>{children}</ContainerBody>
                    </MuiThemeProvider>
                </Providers>
            </body>
        </html>
    );
}
