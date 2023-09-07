'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import rev1 from '@/public/img/testimonials/review_1.jpg';
import rev2 from '@/public/img/testimonials/review_2.png';

const Review = () => {
	return (
		<div
			className='portfolio_tm_testimonial_wrapper bg-[#fff5f6] mb-0 py-28 md:py-20'
			id='review'
		>
			<div className='tm_content'>
				<div className='portfolio_tm_testimonials px-20 md:px-10 md:py-0 xs:p-0'>
					<div className='portfolio_tm_title' data-position='center'>
						<span>- Testimonial</span>
						<h3>What clients say?</h3>
					</div>
					<div className='testimonials_list  xs:w-full'>
						<ul>
							<Swiper
								navigation={true}
								mousewheel={true}
								loop={true}
								modules={[Navigation, Mousewheel, Keyboard]}
								className='mySwiper'
							>
								<SwiperSlide>
									<li>
										<div className='text mb-0 w-3/4 mx-auto '>
											<p className='md:text-2xl xs:text-xl xs:pt-5'>
												Easy and extremely timely! He left my website looking so
												professional and it is so on brand. Im pleased and it
												was worth the money.
											</p>
										</div>
										<div className='short'>
											<div className='image '>
												<Image
													className='rounded-full border-4 border-white xs:w-12 xs:mt-2'
													src={rev1}
													alt='testimonial for ahmed topujss'
													width={100}
													height={100}
												/>
											</div>
											<div className='detail xs:p-0'>
												<h3 className='xs:text-xl'>Frank solis</h3>
											</div>
										</div>
										<p className='job'>Client from USA</p>
									</li>
								</SwiperSlide>
								<SwiperSlide>
									<li>
										<div className='text mb-0 w-3/4 mx-auto'>
											<p className='md:text-2xl xs:text-xl xs:pt-5'>
												I really like the way you designed. I will definitely
												work for other pages as well as new coming projects with
												you. excellent communication and well done. Thanks
											</p>
										</div>
										<div className='short '>
											<div className='image'>
												<Image
													className='rounded-full border-4 border-white xs:w-12 xs:mt-2'
													src={rev2}
													alt='testimonial for ahmed topujss'
													width={100}
													height={100}
												/>
											</div>
											<div className='detail xs:pl-0'>
												<h3 className='xs:text-xl '>lester murrin</h3>
											</div>
										</div>
										<p className='job'>Client from UK</p>
									</li>
								</SwiperSlide>
							</Swiper>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
