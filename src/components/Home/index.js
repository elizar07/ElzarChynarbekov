import React from 'react'
import icons from '../../Assets/img/Без названия.png'

const Home = () => {
	return (
		<div id='home'>
			<div className='container'>
				<div className='home'>
					<img src={icons} alt='img' />
					<div  className='home-text'>
						<h3>Elzar Chynarbekov — Front-End Developer</h3>
						<h1>Красивые и удобные <br /> сайты для бизнеса</h1>
						<h3>(PORTFOLIO 2024)</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
