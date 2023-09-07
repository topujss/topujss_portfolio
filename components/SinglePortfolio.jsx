import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import { SwiperSlide } from 'swiper/react';

import defaultPic from '@/public/img/portfolio/7.png';

const SinglePortfolio = ({ link, live, code, name, tools }) => {
	return (
		<SwiperSlide>
			<li>
				{/* <!-- component --> */}
				<div className='bg-white mx-auto rounded-xl m-4 border shadow-lg shadow-gray-100 overflow-hidden md:mx-28 xs:m-0'>
					<div className='relative h-[15rem] bg-gray-100 object-cover shadow-sm shadow-gray-200'>
						<Image
							src={link ?? defaultPic}
							className='object-cover'
							layout='fill'
							alt='portfolio 1 image'
						/>
					</div>
					<div className='px-4 pb-4 details'>
						<div className=''>
							<div className='mt-3 space-x-1 text-center'>
								<Link
									className='bg-white inline-flex justify-center items-center text-gray-500 shadow-lg w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm '
									href={live}
									target='_blank'
									title='Live Link'
								>
									<GoLinkExternal />
								</Link>
								<Link
									className='bg-white inline-flex justify-center items-center text-gray-500 shadow-lg w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm'
									href={code}
									target='_blank'
									title='github code'
								>
									<FaGithub />
								</Link>
							</div>
						</div>
						<div>
							<div>
								<h1 className='text-2xl font-semibold text-gray-800 my-2 md:text-center'>
									{name}
								</h1>
								<div className='tools md:text-center md:mt-5'>
									<h3 className='mb-2'>Tools:</h3>
									<ul className='flex justify-center mb-0 flex-wrap text-lg'>
										{tools}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		</SwiperSlide>
	);
};

export default SinglePortfolio;
