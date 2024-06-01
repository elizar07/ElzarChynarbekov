import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<div id='header'>
			<div className='container'>
				<div className='header'>
					<div className='logo'>
						<div className='black'>
							<h1>E.</h1>
						</div>
						<div className='logo-text'>
							<h2>Chynarbekov Elzar</h2>
							<h4>It Developers</h4>
						</div>
					</div>
					<div className='header-nav'>
						<Link>Услуги</Link>
						<Link>Обо мне</Link>
						<Link>Тарифы</Link>
						<Link>Вопросы</Link>
						<Link>Портфолио</Link>
						<Link>Контакты</Link>
						<button>Обсудить проект</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
