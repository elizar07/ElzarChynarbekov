import React from 'react'
import { BsAsterisk } from 'react-icons/bs'
import { HiArrowUpRight } from 'react-icons/hi2'

const Price = () => {
	return (
		<div id='price'>
			<div className='container'>
				<div className='section-price'>
					<h1>
						<span>
							<BsAsterisk />
						</span>
						Стоимость услуги
					</h1>
					<div className='price-text'>
						<h2>Тарифы</h2>
						<p>
							Окончательная стоимость и сроки <br />выполнения работ определяются <br />
							после проведения подробного обсуждения.
						</p>
					</div>
				</div>
				<div className='price'>
					<div className='table'>
						<h1>Одностраничный сайт</h1>
						<p>
							Лендинг,сайт-портфолио,
							<br />
							сайт-визитка,промо-сайты
						</p>
						<h2>
							<span>от</span> 1000с
						</h2>
						<h3>
							Обсудить проект
							<span>
								<HiArrowUpRight />
							</span>
						</h3>
					</div>

					<div className='table'>
						<h1>Многостраничный сайт</h1>
						<p>
							Корпоративный сайт, сайт <br />
							от двух и более страниц
						</p>
						<h2>
							<span>от</span> 5000с
						</h2>
						<h3>
							Обсудить проект
							<span>
								<HiArrowUpRight />
							</span>
						</h3>
					</div>
					<div className='table'>
						<h1>Интернет-Магазин</h1>
						<p>
							Магазин с каталогом до 5000
							<br />
							товаров и онлайн-оплатой
						</p>
						<h2>
							<span>от</span> 10000с
						</h2>
						<h3>
							Обсудить проект
							<span>
								<HiArrowUpRight />
							</span>
						</h3>
					</div>
					<div className='table'>
						<h1>Создание видео</h1>
						<p>
							Клипы,короткие видео, <br />
							видео для соц сетей,
						</p>
						<h2>
							<span>от</span> 500с
						</h2>
						<h3>
							Обсудить проект
							<span>
								<HiArrowUpRight />
							</span>
						</h3>
					</div>
					<div className='table'>
						<h1>Создание Дизайна</h1>
						<p>
							Шаблоны,фото-монтаж,дизайн
							<br />
							интерфейса сайта
						</p>
						<h2>
							<span>от</span> 2000с
						</h2>
						<h3>
							Обсудить проект
							<span>
								<HiArrowUpRight />
							</span>
						</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Price
