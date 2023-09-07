'use client';
import { RiReactjsLine } from 'react-icons/ri';
import {
	SiBootstrap,
	SiExpress,
	SiGithub,
	SiMongodb,
	SiMui,
	SiNodedotjs,
	SiPrisma,
	SiRedux,
	SiTailwindcss,
	SiTsnode,
	SiWordpress,
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

const frontendItems = [
	{
		title: 'ReactJS',
		icon: <RiReactjsLine />,
		color: `text-cyan-500 mr-3 inline-block`,
	},
	{
		title: 'Typescript',
		icon: <SiTsnode />,
		color: `text-blue-700 mr-3 inline-block`,
	},
	{
		title: 'Redux',
		icon: <SiRedux />,
		color: `text-yellow-600 mr-3 inline-block`,
	},
	{
		title: 'Tailwind CSS',
		icon: <SiTailwindcss />,
		color: `text-teal-500 mr-3 inline-block`,
	},
	{
		title: 'ThreeJS',
		icon: <TbBrandThreejs />,
		color: `text-teal-300 mr-3 inline-block`,
	},
	{
		title: 'Material UI',
		icon: <SiMui />,
		color: `text-blue-500 mr-3 inline-block`,
	},
	{
		title: 'React Bootstrap',
		icon: <SiBootstrap />,
		color: `text-blue-700 mr-3 inline-block`,
	},
];

const Stack = () => {
	return (
		<div
			className='py-28 md:py-20 relative bg-[#F3F9FF] portfolio_tm_partners'
			id='stack'
		>
			<div className='tm_content'>
				<div className='portfolio_tm_title md:text-center'>
					<span> - Skills</span>
					<h3>My skills are</h3>
				</div>
				<div className='partners_inner flex flex-row gap-8 md:flex-col'>
					<div className='frontend flex items-center md:justify-center xs:flex-col xs:gap-6'>
						<h1 className='text-3xl font-semibold '>Frontend design</h1>
						<ul className='inline-block ml-7'>
							{frontendItems.map((item, index) => (
								<li key={index} className='text-xl'>
									<span className={item.color}>{item.icon}</span>
									{item.title}
								</li>
							))}
						</ul>
					</div>
					<div className='backend flex items-center md:justify-center xs:flex-col xs:gap-6'>
						<h1 className='text-3xl font-semibold '>Backend development</h1>
						<ul className='ml-7'>
							<li className=''>
								<SiNodedotjs className='inline-block mr-3 text-cyan-500' />{' '}
								NodeJS
							</li>
							<li className=' text-xl my-3'>
								<SiExpress className='inline-block mr-3 text-teal-500' />{' '}
								ExpressJS
							</li>
							<li className='text-xl'>
								<SiMongodb className='inline-block mr-3 text-green-500' />{' '}
								MongoDB
							</li>
						</ul>
					</div>
				</div>
				<div className='partners_inner flex flex-row justify-center'>
					<div className='others flex justify-center items-center xs:flex-col xs:gap-6'>
						<h1 className='text-3xl font-semibold '>Others Tech</h1>
						<ul className='inline-block ml-7'>
							<li className='text-xl'>
								<SiGithub className='inline-block mr-3 text-cyan-500' /> Git w/
								Github
							</li>
							<li className='text-xl my-2'>
								<SiPrisma className='inline-block mr-3 text-slate-500' /> Prisma
							</li>
							<li className='text-xl'>
								<SiWordpress className='inline-block mr-3 text-teal-500' />
								Wordpress
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stack;
