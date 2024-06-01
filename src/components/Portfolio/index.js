import React from 'react'
import { BsAsterisk } from 'react-icons/bs'
import { IoIosAdd } from 'react-icons/io'
import estet from '../../Assets/img/estet.jpg'

const Portfolio = () => {
	return (
		<div id='portfolio'>
			<div className='container'>
				<div className='portfolio-teg'>
					<h1>
						<span>
							<BsAsterisk />
						</span>
						Выполненные проекты
					</h1>
					<div className='realise-project'>
						<h2>
							Кейсы <span>2024</span>
						</h2>
						<div className='realise-projects'>
							<div className='realise-line'></div>
							<div className='realise-site'>
								<h1>
									50<span>+</span>
								</h1>
								<h3>Веб-сайтов запущено</h3>
							</div>
							<div className='realise-line2'></div>
							<div className='realise-site'>
								<h1>
									50<span>+</span>
								</h1>
								<h3>Веб-сайтов запущено</h3>
							</div>
						</div>
					</div>
				</div>
				<div className='portfolio'>
					<div className='long'>
						<div className='name-categor'>
							<h1>Name site</h1>
							<h2>categor</h2>
						</div>
						<div className='ling'>
							<img src={estet} alt='img' />
							<div className='long-miniblocks'>
								<div className='block'>name</div>
								<div className='block'>name</div>
								<div className='block'>name</div>
								<div className='block'>name</div>
							</div>
						</div>
					</div>
					<div className='projects'>
						<div className='project2'>
							<div className='project'>
								<div className='name-categors'>
									<h1>Name site</h1>
									<h2>categor</h2>
								</div>
								<div className='ling'>
									<img src={estet} alt='img' />
									<div className='long-miniblocks'>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
									</div>
								</div>
							</div>
							<div className='project'>
								<div className='name-categors'>
									<h1>Name site</h1>
									<h2>categor</h2>
								</div>
								<div className='ling'>
									<img src={estet} alt='img' />
									<div className='long-miniblocks'>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
									</div>
								</div>
							</div>
						</div>{' '}
						<div className='project2'>
							<div className='project'>
								<div className='name-categors'>
									<h1>Name site</h1>
									<h2>categor</h2>
								</div>
								<div className='ling'>
									<img src={estet} alt='img' />
									<div className='long-miniblocks'>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
									</div>
								</div>
							</div>
							<div className='project'>
								<div className='name-categors'>
									<h1>Name site</h1>
									<h2>categor</h2>
								</div>
								<div className='ling'>
									<img src={estet} alt='img' />
									<div className='long-miniblocks'>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
									</div>
								</div>
							</div>
						</div>{' '}
						<div className='project2'>
							<div className='project'>
								<div className='name-categors'>
									<h1>Name site</h1>
									<h2>categor</h2>
								</div>
								<div className='ling'>
									<img src={estet} alt='img' />
									<div className='long-miniblocks'>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
										<div className='block'>name</div>
									</div>
								</div>
							</div>
							<div className='project'>
								<div className='name-categors'>
									<h1>Ваш проект</h1>
								</div>
								<div className='your-project-block'>
									<IoIosAdd className='plus' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
