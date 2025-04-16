'use client'
import CategoryAside from '@/features/categoryAside/category'
import ProfileModal from '@/features/profileSlice/ui/profileModal'
import { FlashSalesTimer } from '@/widgets/actionSales/sales'
import { PromoBanner } from '@/widgets/banner/banner'
import { CategoryBrowser } from '@/widgets/brows category/browsCategory'
import { ProductCard } from '@/widgets/card/card'
import { NewArrivals } from '@/widgets/New-arrial/arrial'
import SwiperComponent from '@/widgets/swiper/swiper'
import { SwiperSlide } from 'swiper/react'

export default function HomePage() {
	const targetDate = new Date('2025-05-01T00:00:00Z')
	const onComplete = () => {
		console.log('timer complete')
	}
	return (
		<>
			<header className='py-[50px] w-[95%]'>
        <ProfileModal/>
				<section className='w-[90%] lg:flex-row flex-col m-auto flex justify-between items-center'>
					<CategoryAside />
					<aside className='lg:w-[70%] w-full h-[200px] lg:h-[300px]'>
						<SwiperComponent>
							<SwiperSlide>1</SwiperSlide>
						</SwiperComponent>
					</aside>
				</section>
			</header>
			<main>
				<FlashSalesTimer targetDate={targetDate} onComplete={onComplete} />
				<section className='w-[90%] m-auto flex overflow-hidden gap-[40px] py-[30px] items-center'>
					<ProductCard
						id='1'
						name={'ps5 pro'}
						price={1245}
						discount={125}
						rating={2}
						originalPrice={23453}
						reviewCount={214}
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvL8Md-JGE52VgQXll5AWrRq8DMs7b5xrqw&s'
					/>
					<ProductCard
						id='1'
						name={'ps5 pro'}
						price={1245}
						discount={125}
						rating={2}
						originalPrice={23453}
						reviewCount={214}
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvL8Md-JGE52VgQXll5AWrRq8DMs7b5xrqw&s'
					/>
					<ProductCard
						id='1'
						name={'ps5 pro'}
						price={1245}
						discount={25}
						rating={2}
						originalPrice={2453}
						reviewCount={214}
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvL8Md-JGE52VgQXll5AWrRq8DMs7b5xrqw&s'
					/>
				</section>
        <CategoryBrowser/>
        <PromoBanner targetDate={targetDate} onComplete={onComplete} />
        <NewArrivals/>
			</main>
		</>
	)
}
