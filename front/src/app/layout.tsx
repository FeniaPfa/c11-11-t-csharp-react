import { MuiThemeProvider } from './styles/MuiThemeProvider';
import './globals.css';
import { Navbar } from './common/components/Navbar';
import Head from 'next/head';
import { ContainerBody } from './containers/ContainerBody';

export const metadata = {
	title: 'EventTo',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Head>
				<title>NeoVest SignIn</title>
			</Head>
			{/* <Providers> */}
			<body>
				<MuiThemeProvider>
					<Navbar />
					<ContainerBody>{children}</ContainerBody>
				</MuiThemeProvider>
			</body>
			{/* </Providers> */}
		</html>
	);
}
