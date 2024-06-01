import React from 'react'
import { BsAsterisk } from 'react-icons/bs'
import github from "../../Assets/img/GitHub-Mark-ea2971cee799.png"
import figma from "../../Assets/img/figma icon.svg"
import visual from "../../Assets/img/visual-studio-code-icon.webp"
import canva from "../../Assets/img/canva.jpg"
import capcut from "../../Assets/img/capcut.jpg"
import adobe from "../../Assets/img/Adobe.svg"
import ilustrator from "../../Assets/img/Illustrator.png"
import photoshop from "../../Assets/img/adobe-photoshop-.svg"
import { HiArrowUpRight } from 'react-icons/hi2'

const Services = () => {
	return (
		<div id='services'>
			<div className='container'>
				<div className='services'>
					<div className='basic-services'>
						<h1>
							<span>
								<BsAsterisk />
							</span>
							Основные Услуги
						</h1>
						<h2>
							Разрабатываю веб-сайты с упором на <br />
							обеспечение интуитивно понятной <br />
							логики и навигации. Объединяю <br />
							бизнес, эстетику и функциональность.
						</h2>
					</div>
					<div className='blocks'>
						<div className='sait-developer'>
							<h1>Разработка сайтов</h1>
							<div className='sait-developer-p'>
								<p>
									Лендинги <br />
									Интернет-магазины <br />
									Корпоративные сайты
								</p>
								<p>
									Все этапы: от создания дизайн- <br />
									концепции до запуска и сопровождения
								</p>
							</div>
							<div className='sait-developer-icons'>
								<div className='icon'>
									<img className='github' src={github} alt='img' />
								</div>
								<div className='icon'>
									<img src={figma} alt='img' />
								</div>
								<div className='icon'>
									<img src={visual} alt='img' />
								</div>
							</div>
							<div className='mini-blocks'>
								<div className='mini-block'>
									<h2>React</h2>
								</div>
								<div className='mini-block'>
									<h2>Javascript</h2>
								</div>
								<div className='mini-block'>
									<h2>
										HTML <br />
										CSS
									</h2>
								</div>
								<div className='mini-block'>
									<h2>Typescript</h2>
								</div>
								<div className='mini-block'>
									<h2>Redux</h2>
								</div>
							</div>
						</div>
						<div className='sait-developer'>
							<h1>Создание видео и.т.д</h1>
							<div className='sait-developer-p'>
								<p>
									Клипы <br />
									Короткие видео <br />
									Ролики для соцсетей
								</p>
								<p>
									Экспертные Reels, Shorts l Трендово и <br />
									качественно сделаю Рилс шортс
								</p>
							</div>
							<div className='sait-developer-icons'>
								<div className='icon'>
									<img className='rounded-xl' src={capcut} alt='img' />
								</div>
								<div className='icon'>
									<img className='rounded-xl' src={canva} alt='img' />
								</div>
								<div className='icon'>
									<img className='rounded-xl' src={adobe} alt='img' />
								</div>
							</div>
							<div className='mini-blocks'>
								<div className='mini-block'>
									<h2>Youtube </h2>
								</div>
								<div className='mini-block'>
									<h2>Reels</h2>
								</div>
								<div className='mini-block'>
									<h2>TikTok</h2>
								</div>
								<div className='mini-block'>
									<h2>Shorts</h2>
								</div>
								<div className='mini-block'>
									<h2>И.Т.Д</h2>
								</div>
							</div>
						</div>
						<div className='sait-developer'>
							<h1>Создание дизайна и.т.д</h1>
							<div className='sait-developer-p'>
								<p>
									Логотип <br />
									Презинтация <br />
									Веб-дизайн
								</p>
								<p>
									Возьму вашу идею и предложу варианты <br /> решения либо
									разработаю новую.
								</p>
							</div>
							<div className='sait-developer-icons'>
								<div className='icon'>
									<img src={photoshop} alt='img' />
								</div>
								<div className='icon'>
									<img src={canva} alt='img' />
								</div>
								<div className='icon'>
									<img src={ilustrator} alt='img' />
								</div>
							</div>
							<div className='mini-blocks'>
								<div className='mini-block'>
									<h2>Обработка</h2>
								</div>
								<div className='mini-block'>
									<h2>Шаблон</h2>
								</div>
								<div className='mini-block'>
									<h2>ФотоМонтаж</h2>
								</div>
								<div className='mini-block'>
									<h2>Инфографика</h2>
								</div>
								<div className='mini-block'>
									<h2>Иллюстрация</h2>
								</div>
							</div>
						</div>
						<div
							className='sait-developer-empty'
						>
							<h1>
								Обсудить проект{' '}
								<span>
									<HiArrowUpRight />
								</span>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
