import '@/public/css/style.css';
import './globals.scss';
import { Roboto } from 'next/font/google';
import 'swiper/css/bundle';
import Head from 'next/head';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
	title: 'personal portfolio',
	description: 'All about me on my personal portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body className={roboto.className}>
				<div className='portfolio_tm_mainpart max-w-screen-2xl'>
					<div className='mainpart_inner'>{children}</div>
				</div>
			</body>
		</html>
	);
}
