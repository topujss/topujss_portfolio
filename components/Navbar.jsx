'use client';
import Link from 'next/link';
import { FaHome, FaRegUserCircle } from 'react-icons/fa';
import {
	HiOutlinePresentationChartBar,
	HiSquare3Stack3D,
} from 'react-icons/hi2';
import { MdOutlineContactMail } from 'react-icons/md';
import { PiNotePencilBold } from 'react-icons/pi';

const navMenuItems = [
	{
		path: '#home',
		icon: <FaHome />,
	},
	{
		path: '#about',
		icon: <FaRegUserCircle />,
	},
	{
		path: '#stack',
		icon: <HiSquare3Stack3D />,
	},
	{
		path: '#portfolio',
		icon: <HiOutlinePresentationChartBar />,
	},
	{
		path: '#review',
		icon: <PiNotePencilBold />,
	},
	{
		path: '#contact',
		icon: <MdOutlineContactMail />,
	},
];

const Navbar = () => {
	return (
		<ul className='anchor_nav flex flex-col justify-center items-center bg-white py-4 rounded-3xl fixed translate-x-[-50%] lg:left-16 top-1/3  w-12 h-auto z-50 gap-3 xs:left-[2.2rem] left-[4%]'>
			{navMenuItems.map(({ path, icon }, index) => (
				<li key={index} className='text-2xl'>
					<Link className='text-emerald-500' href={path}>
						{icon}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Navbar;
