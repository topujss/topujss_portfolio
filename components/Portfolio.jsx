import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SinglePortfolio from './SinglePortfolio';

// project image url
import port1 from '@/public/img/portfolio/netflix_home.png';

const Portfolio = () => {
	return (
		<div className='portfolio_tm_portfolio md:py-20' id='portfolio'>
			<div className='tm_content'>
				<div className='portfolio_tm_portfolio_title md:flex md:flex-col md:text-center'>
					<div className='md:w-full portfolio_tm_title'>
						<span className='md:m-0'>- Projects</span>
						<h3>Recent completed works</h3>
					</div>
					<div className='md:w-full md:text-center md:mt-5'>
						<Link
							className='text-xl font-medium text-emerald-500 hover:text-emerald-400 transition-shadow'
							href={'mailto:adahmedt@gmail.com'}
						>
							Email me
						</Link>
					</div>
				</div>
				<div className='portfolio_list mb-0'>
					<ul className='gallery_zoom flex justify-center items-center gap-4 mx-auto md:m-0 md:w-full'>
						<Swiper
							breakpoints={{
								992: {
									width: 992,
									slidesPerView: 3,
								},
								768: {
									width: 768,
									slidesPerView: 1,
								},
								425: {
									width: 425,
									slidesPerView: 1,
								},
								375: {
									width: 375,
									slidesPerView: 1,
								},
								320: {
									width: 320,
									slidesPerView: 1,
								},
							}}
							slidesPerView={3}
							spaceBetween={30}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination, Navigation]}
							className='mySwiper xs:flex xs:justify-center xs:flex-col'
							navigation
						>
							<SwiperSlide>
								<SinglePortfolio
									className='flex-wrap'
									link={port1}
									live='https://rnflix.netlify.app/'
									code='https://github.com/topujss/react-netflix'
									name='Netflix design clone'
									tools='ReactJS, Tailwind CSS, Slider, SCSS'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<SinglePortfolio
									live='https://github.com/topujss'
									code='https://github.com/mycode'
									name='Social Media'
									tools='ReactJS, Tailwind CSS, Firebase'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<SinglePortfolio
									live='https://github.com/topujss'
									code='https://github.com/mycode'
									name='Social Media'
									tools='ReactJS, Tailwind CSS, Firebase'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<SinglePortfolio
									live='https://github.com/topujss'
									code='https://github.com/mycode'
									name='Social Media'
									tools='ReactJS, Tailwind CSS, Firebase'
								/>
							</SwiperSlide>
						</Swiper>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
