import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import React, { useState } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsAsterisk } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'
import me from '../../Assets/img/photo-me.jpg'
import photo_1 from '../../Assets/img/photo_1 (1).jpg'
import photo_2 from '../../Assets/img/photo_2.jpg'
import photo_3 from '../../Assets/img/photo_3.jpg'
import photo_4 from '../../Assets/img/photo_4.jpg'
import photo_5 from '../../Assets/img/photo_5.jpg'
import photo_6 from '../../Assets/img/photo_6.jpg'
import photo_7 from '../../Assets/img/photo_7.jpg'
import photo_8 from '../../Assets/img/photo_8.jpg'
import photo_10 from '../../Assets/img/photo_10.jpg'
import photo_11 from '../../Assets/img/photo_11.jpg'
import photo_12 from '../../Assets/img/photo_12.jpg'
import photo_13 from '../../Assets/img/photo_13.jpg'
import photo_14 from '../../Assets/img/photo_14.jpg'
import photo_15 from '../../Assets/img/photo_15.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper/modules'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
}

const About = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<div id='abou'>
			<div className='container'>
				<div className='about-me'>
					<h1>
						<span>
							<BsAsterisk />
						</span>
						Обо мне
					</h1>
				</div>
				<div className='about'>
					<div className='about-text'>
						<h1>
							Привет меня зовут Элзар я новичок в мире разработки! <br /> Мои
							первые шаги в программировании <br /> были как попытка понять что
							чувствуют программистом <br />
							когда пишут код. И уже год занимаюсь веб-дизайном, <br /> и
							Фронтенд разработкой и я не собираюсь <br />
							останавливаться, и теперь моя цель - стать <br /> профессиональным
							программистым, писать алгоритмы <br />
							наизусть и исправлять баги на ходу!
						</h1>
						<div className='sots-set'>
							<div className='circle'>
								<a href='https://t.me/elzar07'>
									<FaTelegramPlane className='sots-circle' />
								</a>
							</div>
							<div className='circle'>
								<a href='https://wa.me/qr/SYPZPCNXHOGLF1'>
									<IoLogoWhatsapp className='sots-circle' />
								</a>
							</div>
							<div className='circle'>
								<SiGmail className='sots-circle' />
							</div>
							<div className='circle'>
								<a
									className='sots-circle'
									href='https://www.instagram.com/invites/contact/?i=6ekc29pnxpd9&utm_content=h4au13v'
								>
									<AiFillInstagram className='sots-circle' />
								</a>
							</div>
						</div>
					</div>

					<Button onClick={handleOpen}>
						<img src={me} alt='img' />
					</Button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby='modal-modal-title'
						aria-describedby='modal-modal-description'
					>
						<>
							<Swiper
								effect={'cards'}
								grabCursor={true}
								modules={[EffectCards]}
								className='mySwiper'
							>
								<h1>Галерея</h1>
								<SwiperSlide><img src={photo_15} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_1} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_2} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_3} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_4} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_5} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_6} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_7} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_8} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_10} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_11} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_12} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_13} alt="img" /></SwiperSlide>
								<SwiperSlide><img src={photo_14} alt="img" /></SwiperSlide>
							</Swiper>
						</>
					</Modal>
				</div>
			</div>
		</div>
	)
}

export default About
