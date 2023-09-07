import Image from 'next/image';
import me from '@/public/img/about/me.png';
import Link from 'next/link';

const isHired = true;

const aboutItems = [
	{
		title: 'Age',
		desc: `${new Date().getFullYear() - 2003}`,
	},
	{
		title: 'Live in',
		desc: 'USA',
	},
	{
		title: 'Mail',
		desc: <Link href='mailto:adahmedt@gmail.com'>Email Me</Link>,
	},
	{
		title: 'Hire',
		desc: isHired ? 'Available' : 'Not Available',
	},
];

const About = () => {
	return (
		<div className='portfolio_tm_about md:py-20 xs:py-14' id='about'>
			<div className='tm_content'>
				<div className='portfolio_tm_biography gap-5 items-center justify-center md:flex-col'>
					<div className='w-1/2 md:w-full flex md:justify-center '>
						<Image
							className='md:aspect-[16/13] xs:aspect-[14/12] xs:p-5'
							src={me}
							alt='experience'
						/>
					</div>
					<div className='w-1/2 md:w-3/4 md:text-center xs:w-full'>
						<div className='text text-xl'>
							<p className='md:mb-0'>
								Hello there! My name is&nbsp;
								<span className='gradient_text text-xl font-medium'>
									Toquir Ahmed Topu
								</span>
								. I am a web apps designer and developer. My main focus is to
								create web applications that are responsive and user friendly. I
								am a team working player and love to work with new technologies.
							</p>
							<p className='md:my-5'>
								With 2 years experience as a professional full stack developer,
								I have acquired the skills and knowledge to make your next dream
								project. I enjoy every step of the design process, from
								discussion to live.
							</p>
						</div>
						<div className='info'>
							<ul className='md:flex md:justify-between xs:flex-col'>
								{aboutItems.map(({ title, desc }, index) => (
									<li key={index} className='pr-4 md:m-0 md:pr-0 xs:mb-5'>
										<strong>{title}</strong>
										<span className='xs:inline-block xs:ml-5'>{desc}</span>
									</li>
								))}
							</ul>
							<div className='portfolio_tm_button mt-7' data-style='border'>
								<Link
									className='anchor xs:w-full xs:text-center'
									href='#contact'
								>
									Hire Me
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='portfolio_tm_counter md:mb-0 '>
					<ul className='md:flex md:items-stretch md:justify-center md:m-0 md:gap-10 xs:flex-col '>
						<li className='mb-0 md:w-1/3 md:p-0 xs:w-full'>
							<div className='list_inner py-14 px-10'>
								<h3>2+</h3>
								<span>Years of Experience</span>
							</div>
						</li>
						<li className='m-0 md:w-1/3 md:p-0 xs:w-full'>
							<div className='list_inner py-14 px-10'>
								<h3>10+</h3>
								<span>Projects Completed</span>
							</div>
						</li>
						<li className='md:m-0 md:w-1/3 md:p-0 xs:w-full'>
							<div className='list_inner py-14 px-10'>
								<h3>5+</h3>
								<span>Happy Clients</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
