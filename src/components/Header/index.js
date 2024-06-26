import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import React, { useContext, useState } from 'react'
import { FiChevronRight, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MainContext } from '../../context'

gsap.registerPlugin(ScrollToPlugin)

const Header = () => {
	const [userName, setUserName] = useState('')
	const [userPhone, setUserPhone] = useState('')

	const { main, setMain } = useContext(MainContext)
	const notify = () =>
		toast.success('Отправлено', {
			position: 'top-left',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark'
		})
	const notifys = () =>
		toast.error('Заполните поле', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark'
		})

	function toServices() {
		gsap.to(window, {
			duration: 1,
			scrollTo: { y: '.services' }
		})
	}

	function toAbout() {
		gsap.to(window, {
			duration: 1,
			scrollTo: { y: '.about', offsetY: 0 }
		})
	}

	function toAcardion() {
		gsap.to(window, {
			duration: 1,
			scrollTo: { y: '#acardion', offsetY: 0 }
		})
	}

	function toPrice() {
		gsap.to(window, {
			duration: 1,
			scrollTo: { y: '.section-price', offsetY: 0 }
		})
	}

	function toPortfolio() {
		gsap.to(window, { duration: 2, scrollTo: { y: '#portfolio', offsetY: 0 } })
	}

	function toContact() {
		gsap.to(window, {
			duration: 1,
			scrollTo: { y: '#contact', offsetY: 0 }
		})
	}
	const submitTelegram = () => {
		const my_id = '-1002217889076'
		const token = '7289936064:AAEnmOm-u46g-ve56Eb9uAIY6QOjR-t_ZQs'
		const url_api = `https://api.telegram.org/bot${token}/sendMessage`

		if ((userName, userPhone === '')) {
			notifys()
		} else {
			notify()

			const userData = {
				chat_id: my_id,
				parse_mode: 'html',
				text: `Консультация:  \n Имя: ${userName},\n Номер тел: ${userPhone}, `
			}

			axios
				.post(url_api, userData)
				.then(response => {
					console.log('Message sent', response)
				})
				.catch(error => {
					console.error('Error sending message', error)
				})

			setUserName('')
			setUserPhone('')
		}
	}
	return (
		<div id='header'>
			<div className='container'>
				<div
					className='main-form z-[100]'
					style={{ display: main ? 'block' : 'none' }}
				>
					<FiX onClick={() => setMain(false)} className='main-from-icon' />
					<div className='pt-4 pl-9'>
						<h1>Обсудить проект</h1>
						<p>
							Оставьте свои контакты, я свяжусь с вами в течение дня и отвечу на
							все вопросы
						</p>
						<div className='main-form-inputs'>
							<div className='relative z-0'>
								<input
									value={userName}
									onChange={e => setUserName(e.target.value)}
									type='text'
									id='floating_standard'
									className='block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
									placeholder=' '
								/>
								<label
									htmlFor='floating_standard'
									className='absolute mt-6 ml-5 text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 rtl:peer-focus:translate-x-1/3 rtl:peer-focus:left-auto'
								>
									Ваше имя
								</label>
							</div>
							<div className='relative z-0'>
								<input
									value={userPhone}
									onChange={e => setUserPhone(e.target.value)}
									type='text'
									id='floating_email'
									className='block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
									placeholder=' '
								/>
								<label
									htmlFor='floating_email'
									className='absolute mt-6 ml-5 text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 rtl:peer-focus:translate-x-1/3 rtl:peer-focus:left-auto'
								>
									+996(999) 99-99-99
								</label>
							</div>
							<FiChevronRight
								className='main-form-strelka'
								onClick={submitTelegram}
							/>
						</div>
						<p>
							Нажимая кнопку «Отправить», вы соглашаетесь с политикой
							конфиденциальности
						</p>
					</div>
				</div>
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
						<Link onClick={() => toServices()}>Услуги</Link>
						<Link onClick={() => toAbout()}>Обо мне</Link>
						<Link onClick={() => toPrice()}>Тарифы</Link>
						<Link onClick={() => toAcardion()}>Вопросы</Link>
						<Link onClick={() => toPortfolio()}>Портфолио</Link>
						<Link onClick={() => toContact()}>Контакты</Link>
						<button onClick={() => setMain(true)}>Обсудить проект</button>
					</div>
				</div>
			</div>
			{main ? (
				<div onClick={() => setMain(false)} className='modalBg'></div>
			) : (
				''
			)}
			<ToastContainer />
		</div>
	)
}

export default Header
