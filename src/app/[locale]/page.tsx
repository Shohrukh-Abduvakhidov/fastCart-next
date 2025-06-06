'use client'
import CategoryAside from '@/features/categoryAside/ui/category'
import ProfileModal from '@/features/profileSlice/ui/profileModal'
import { FlashSalesTimer } from '@/widgets/actionSales/sales'
import { PromoBanner } from '@/widgets/banner/banner'
import { CategoryBrowser } from '@/widgets/brows category/browsCategory'
import { NewArrivals } from '@/widgets/New-arrial/arrial'
import SwiperComponent from '@/widgets/swiper/swiper'
import { ProductList } from '@/widgets/productList/productList'


export default function HomePage() {
	const targetDate = new Date('2025-05-01T00:00:00Z')
	const onComplete = () => {
	}
	return (
		<>
			<header className='py-[50px] w-[95%]'>
				<ProfileModal />
				<section className='w-[90%] lg:flex-row flex-col m-auto flex justify-between items-center'>
					<CategoryAside />
					<aside className='lg:w-[70%] w-full h-[200px] lg:h-[300px]'>
						<SwiperComponent/>
					</aside>
				</section>
			</header>
			<main>
				<FlashSalesTimer targetDate={targetDate} onComplete={onComplete} />
				<ProductList />
				<CategoryBrowser />
				<PromoBanner targetDate={targetDate} onComplete={onComplete} />
				<ProductList style='grid'/>
				<NewArrivals />
			</main>
		</>
	)
}