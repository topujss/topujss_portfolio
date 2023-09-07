import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';
import me from '@/public/img/about/me2.png';
import { FaGithub, FaHackerrank, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Home = () => {
	return (
		<div className='portfolio_tm_home py-20' id='home'>
			<div className='tm_content'>
				<div className='details md:flex-col-reverse'>
					<div className='md:w-full'>
						<div className='title md:text-center md:text-lg'>
							<h3 className='md:text-4xl xs:text-2xl'>
								Hi, Im{' '}
								<span className='blueColor md:text-5xl xs:text-3xl'>
									Toquir!
								</span>
							</h3>
							<h3 className='md:text-5xl xs:text-3xl'>
								<Typewriter
									className='md:!text-4xl'
									options={{
										strings: [
											'NodeJS developer',
											'Mern stack dev',
											'React developer',
											'NextJS developer',
										],
										autoStart: true,
										loop: true,
										delay: 100,
										deleteSpeed: 100,
									}}
								/>
							</h3>
							<h3 className='md:text-5xl xs:text-2xl'>Based in Maryland</h3>
						</div>
						<div className='subtitle md:text-xl md:text-center md:mx-auto md:float-none'>
							<p>
								Im a Maryland based full stack developer and latest tech learner
								with
								<span className='blueColor'> 2+ years</span> of experience
							</p>
						</div>
						<div className='buttons social md:justify-center'>
							<ul className='flex justify-start items-center gap-4'>
								<li>
									<Link href={`https://github.com/topujss`} target='_blank'>
										<FaGithub className='text-lime-700' />
									</Link>
								</li>
								<li>
									<Link
										href={`https://linkedin.com/in/topujss`}
										target='_blank'
									>
										<FaLinkedin className='text-blue-700' />
									</Link>
								</li>
								<li>
									<Link href={`https://twitter.com/topujss`} target='_blank'>
										<FaTwitter className='text-cyan-500' />
									</Link>
								</li>
								<li>
									<Link
										href={`https://www.hackerrank.com/toquirahamed1`}
										target='_blank'
									>
										<FaHackerrank className='text-emerald-500' />
									</Link>
								</li>
								<li>
									<Link href={`https://leetcode.com/topujss/`} target='_blank'>
										<SiLeetcode className='text-yellow-400' />
									</Link>
								</li>
							</ul>
						</div>
						<div className='buttons md:justify-center md:!mb-0 xs:flex-col xs:gap-5 xs:float-none'>
							<div className='portfolio_tm_button xs:w-[75%]'>
								<Link
									className='anchor xs:w-full xs:text-center'
									href={
										'https://drive.google.com/file/d/1XCiTKxCL9BEU3VpeXZhnmUkIiliDgOLD/view?usp=sharing'
									}
									download='Toquir Ahmed Resume'
								>
									Download resume
								</Link>
							</div>
							<div
								className='portfolio_tm_button xs:w-[75%] xs:ml-0'
								data-style='border'
							>
								<Link
									className='anchor xs:w-full xs:text-center'
									href='#portfolio'
								>
									Portfolio
								</Link>
							</div>
						</div>
					</div>
					<div className='md:pb-16  md:m-auto'>
						<Image
							className='md:max-w-[300px] xs:aspect-[16/12] relative bottom-16 md:static inline'
							src={me}
							alt='ahmed topujss linkedin'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
