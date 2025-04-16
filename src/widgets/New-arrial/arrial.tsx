import Image, { StaticImageData } from 'next/image'
import { Clock, Headphones, ShieldCheck } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import ps5 from '@/app/assets/ps5-slim-goedkope-playstation_large 1.png'
import womans from '@/app/assets/attractive-woman-wearing-hat-posing-black-background 1.png'
import speakers from '@/app/assets/Frame 686.png'
import parfum from '@/app/assets/Frame 687.png'

interface ProductCardProps {
	title: string
	description: string
	image: StaticImageData
	size?: 'large' | 'small'
}

function ProductCard({
	title,
	description,
	image,
	size = 'small',
}: ProductCardProps) {
	return (
		<div
			className={`relative overflow-hidden rounded-lg ${
				size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
			}`}
		>
			<div className='absolute inset-0 bg-black'>
				<Image
					src={image || '/placeholder.svg'}
					alt={title}
					fill
					className='object-cover opacity-80 hover:opacity-90 transition-opacity'
				/>
			</div>
			<div className='relative h-full flex flex-col justify-end p-6 text-white'>
				<h3
					className={`font-bold ${
						size === 'large' ? 'text-2xl' : 'text-xl'
					} mb-1`}
				>
					{title}
				</h3>
				<p className='text-sm text-gray-300 mb-4'>{description}</p>
				<Button
					variant='outline'
					className='w-fit bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors'
				>
					Shop Now
				</Button>
			</div>
		</div>
	)
}

export function NewArrivals() {
	return (
		<section className='w-full py-12'>
			<div className='container px-4 mx-auto'>
				{/* Header */}
				<div className='mb-8'>
					<div className='flex items-center gap-2 mb-2'>
						<div className='w-1 h-6 bg-red-500'></div>
						<span className='text-red-500 text-sm font-medium'>Featured</span>
					</div>
					<h2 className='text-2xl md:text-3xl font-bold'>New Arrival</h2>
				</div>

				{/* Product Grid */}
				<div className='grid lg:grid-cols-4 lg:gap-4  gap-8 mb-16'>
					{/* Large PS5 card on the left */}
					<ProductCard
						title='PlayStation 5'
						description='Black and white version of the PS5 available for sale.'
						image={ps5}
						size='large'
					/>

					{/* Right column with 3 smaller cards */}
					<div className='col-span-2 grid lg:grid-rows-2 gap-4'>
						<ProductCard
							title="Women's Collections"
							description='Featured women collections that give you another vibe.'
							image={womans}
						/>

						<div className='grid lg:grid-cols-2 gap-4'>
							<ProductCard
								title='Speakers'
								description='Amazon wireless speakers with amazing sound quality.'
								image={speakers}
							/>
							<ProductCard
								title='Perfume'
								description='GUCCI INTENSE OUD EDP perfume for a luxurious experience.'
								image={parfum}
							/>
						</div>
					</div>
				</div>

				{/* Service Features */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='flex flex-col items-center text-center'>
						<div className='bg-gray-100 p-4 rounded-full mb-4'>
							<Clock className='h-6 w-6' />
						</div>
						<h3 className='font-bold text-lg mb-2'>FREE AND FAST DELIVERY</h3>
						<p className='text-sm text-gray-500'>
							Free delivery for all orders over $50
						</p>
					</div>
					<div className='flex flex-col items-center text-center'>
						<div className='bg-gray-100 p-4 rounded-full mb-4'>
							<Headphones className='h-6 w-6' />
						</div>
						<h3 className='font-bold text-lg mb-2'>24/7 CUSTOMER SERVICE</h3>
						<p className='text-sm text-gray-500'>
							Friendly 24/7 customer support
						</p>
					</div>
					<div className='flex flex-col items-center text-center'>
						<div className='bg-gray-100 p-4 rounded-full mb-4'>
							<ShieldCheck className='h-6 w-6' />
						</div>
						<h3 className='font-bold text-lg mb-2'>MONEY BACK GUARANTEE</h3>
						<p className='text-sm text-gray-500'>
							We return money within 30 days
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
