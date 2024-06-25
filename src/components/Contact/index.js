import axios from 'axios'
import React, { useState } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
	const [userName, setUserName] = useState('')
	const [userPhone, setUserPhone] = useState('')
	const [userCheck_website, setUserCheck_website] = useState(false)
	const [userCheck_video_i_t_d, setUserCheck_video_i_t_d] = useState(false)
	const [userCheck_design_i_t_d, setUserCheck_design_i_t_d] = useState(false)
	const submitTelegram = () => {
		const my_id = '-1002217889076'
		const token = '7289936064:AAEnmOm-u46g-ve56Eb9uAIY6QOjR-t_ZQs'
		const url_api = `https://api.telegram.org/bot${token}/sendMessage`

		const userData = {
			chat_id: my_id,
			parse_mode: 'html',
			text: `Заказ:  \n Имя: ${userName},\n Номер тел: ${userPhone},\n Веб-сайт И.Т.Д:  ${userCheck_website},\n Дизайн И.Т.Д:  ${userCheck_design_i_t_d}, \n Видео И.Т.Д:  ${userCheck_video_i_t_d} `
		}

		axios
			.post(url_api, userData)
			.then(response => {
				console.log('Message sent', response)
			})
			.catch(error => {
				console.error('Error sending message', error)
			})
	}
console.log(userCheck_website);
	return (
		<div id='contact'>
			<div className='container'>
				<h1 className='kontakt'>Контакты</h1>
				<div className='contact'>
					<div className='sots-blocks'>
						<a href='https://t.me/elzar07'>
							<div className='sots-block'>
								<div className='circles'>
									<FaTelegramPlane className='sots-circles' />
								</div>
							</div>
						</a>
						<a href='https://wa.me/qr/SYPZPCNXHOGLF1'>
							<div className='sots-block'>
								<div className='circles'>
									<IoLogoWhatsapp className='sots-circles' />
								</div>
							</div>
						</a>
						<div className='sots-block'>
							<div className='circles'>
								<SiGmail className='sots-circles' />
							</div>
						</div>
						<a
							href='https://www.instagram.com/invites/contact/?i=6ekc29pnxpd9&utm_content=h4au13v'
							className='sots-circles'
						>
							<div className='sots-block'>
								<div className='circles'>
									<AiFillInstagram className='sots-circles' />
								</div>
							</div>
						</a>
					</div>
					<div className='contact-big-block'>
						<div className='contact-big-block-text'>
							<h1>
								Обсудить проект, договориться об <br />
								онлайн-встрече или задать вопрос.
							</h1>
							<p>
								Свяжитесь со мной любым удобным способом или оставьте заявку,{' '}
								<br />я буду рад узнать о продукте и проконсультировать.
							</p>
							<h2>Мой номер</h2>
							<h3>+996(220) 66-07-29</h3>
							<h4>Заполните форму</h4>
							<div className='form'>
								<div className='relative z-0'>
									<input
										onChange={e => setUserName(e.target.value)}
										type='text'
										id='floating_standard'
										className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
										placeholder=' '
									/>
									<label
										htmlFor='floating_standard'
										className='absolute mt-6 ml-5 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 rtl:peer-focus:translate-x-1/3 rtl:peer-focus:left-auto'
									>
										Ваше имя
									</label>
								</div>
								<div className='relative z-0'>
									<input
										onChange={e => setUserPhone(e.target.value)}
										type='text'
										id='floating_standard'
										className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
										placeholder=' '
									/>
									<label
										htmlFor='floating_standard'
										className='absolute mt-6 ml-5 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 rtl:peer-focus:translate-x-1/3 rtl:peer-focus:left-auto'
									>
										<span>+996</span> (999) 999-999
									</label>
								</div>
							</div>
							<h5>Выберите вид услуги</h5>
							<div className='contact-services'>
								<div className='service-top'>
									<div className='contact-service-text'>
										<input
											onChange={e => setUserCheck_website(e.target.checked)}
											type='checkbox'
										/>
										<h6>Разработка сайтов</h6>
									</div>
									<div className='contact-service-text'>
										<input
											onChange={e => setUserCheck_video_i_t_d(e.target.checked)}
											type='checkbox'
										/>
										<h6>Создание видео и.т.д</h6>
									</div>
								</div>
								<div className='service-bottom'>
									<div className='contact-service-text'>
										<input
											onChange={e => setUserCheck_design_i_t_d(e.target.checked)}
											type='checkbox'
										/>
										<h6>Создание дизайна и.т.д</h6>
									</div>
									<div className='contact-service-text'></div>
								</div>
							</div>
							<button onClick={submitTelegram}>Получить консультацию</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
