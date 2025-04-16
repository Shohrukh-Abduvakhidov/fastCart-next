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

export default function SwiperComponent({ children }: Props) {
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
					<Image src={bannerImage} alt='banners'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={bannerImage} alt='banners'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={bannerImage} alt='banners'/>
				</SwiperSlide>
				{children}
			</Swiper>
		</>
	)
}
