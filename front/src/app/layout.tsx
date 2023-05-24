'use client';
import { MuiThemeProvider } from './styles/MuiThemeProvider';
import './globals.css';
import { Hero } from './common/components/Hero';
import { Navbar } from './common/components/Navbar';
import { ContainerBody } from './containers/ContainerBody';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from './store';

export const metadata = {
  title: 'EventTo',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>NeoVest SignIn</title>
      </Head>

      <body>
        <Provider store={store}>
          <MuiThemeProvider>
            <Navbar />
            <Hero />
            <ContainerBody>{children}</ContainerBody>
          </MuiThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
