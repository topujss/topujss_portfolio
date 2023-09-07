'use client';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Portfolio from '@/components/Portfolio';
import Review from '@/components/Review';
import Contact from '@/components/Contact';
import Home from '@/components/Home';

const page = () => {
	return (
		<main className='portfolio_tm_section animated relative'>
			<Home />
			<Navbar />
			<About />
			<Stack />
			<Portfolio />
			<Review />
			<Contact />
		</main>
	);
};

export default page;
