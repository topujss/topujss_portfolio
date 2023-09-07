import Link from 'next/link';

const Contact = () => {
	return (
		<section className='portfolio_tm_contact py-28 md:py-20' id='contact'>
			<div className='tm_content'>
				<div className='wrapper float-none justify-between gap-5 md:flex-col md:justify-center md:items-center'>
					<div className='w-1/2 md:w-full'>
						<div className='portfolio_tm_title md:text-center'>
							<span>- Lets Connect</span>
							<h3>Get in touch</h3>
						</div>
						<div className='text'>
							<p className='md:text-center'>
								Im currently avaliable to take on new projects, so feel free to
								send me a message about anything that you want to run past me.
								You can contact anytime at 24/7
							</p>
						</div>
						<div className='info md:text-center'>
							<ul>
								<li>
									<Link href='mailto:adahmedt@gmail.com'>
										<span className='text-2xl'>Email Me</span>
									</Link>
								</li>
								<li>
									<span>
										<Link
											className='text-2xl'
											href='https://www.linkedin.com/in/topujss/'
											target='_blank'
											rel='noopener noreferrer'
										>
											My LinkedIn
										</Link>
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className='w-1/2 md:w-full'>
						<div className='fields'>
							<form className='my_form' id='my_form'>
								<div
									className='returnmessage'
									data-success='Your message has been received, We will contact you soon.'
								></div>
								<div className='empty_notice'>
									<span>Please Fill Required Fields</span>
								</div>
								<div className='first'>
									<ul>
										<li>
											<input
												id='name'
												type='text'
												className=' pl-2'
												placeholder='Enter your name*'
												required
											/>
										</li>
										<li>
											<input
												required
												id='email'
												className=' pl-2'
												type='text'
												placeholder='Your email*'
											/>
										</li>
									</ul>
								</div>
								<div className='last'>
									<textarea
										className='pt-2 pl-2'
										id='message'
										placeholder='Write your project details...'
									></textarea>
								</div>
								<div className='portfolio_tm_button'>
									<button
										className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded md:w-full'
										type='submit'
										id='send_message'
									>
										Submit now
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
