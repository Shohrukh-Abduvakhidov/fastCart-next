/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import bannerImage from "@/app/assets/Frame 560.png"
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.css'

type Props = {
	children: ReactNode
}
// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import { ReactNode } from 'react'
import Image from 'next/image'
import s25Image from "@/app/assets/s25 samsung.jpg"
import ps5Image from "@/app/assets/ps5Image.jpg"
import rogPhone from "@/app/assets/rogPhone.jpg"
export default function SwiperComponent() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Image src={bannerImage} alt='banners'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={s25Image} alt='s25Image'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={ps5Image} alt='banners'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={rogPhone} alt='banners'/>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
