/* eslint-disable react-hooks/rules-of-hooks */
'use client'
/* eslint-disable @next/next/no-img-element */
import { useGetProductByIdQuery } from '@/entities/Products/api/productApi'
import { Button } from '@/shared/ui/button'
import Loading from '@/shared/ui/loading/loading'
import WishListBtn from '@/shared/ui/wishListBtn'
import ImageGallery from '@/widgets/imageGalery/imageGalery'
import { RotateCcw, TruckIcon } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function ProductPage() {
	const params = useParams()
	const productId = Number(params.id)
	console.log(productId)

	if (isNaN(productId)) {
		return <div>Invalid product ID</div>
	}

	const { data: product, error, isLoading } = useGetProductByIdQuery(productId)

	if (isLoading) {
		return <Loading />
	}
	if (error) {
		return <div>Error loading product</div>
	}

	return (
		<div className='p-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10'>
			<ImageGallery images={product?.data?.images} />

			<div className='space-y-6'>
				<h1 className='text-3xl font-bold text-gray-800'>
					{product?.data?.productName}
				</h1>

				<p className='text-2xl text-red-600 font-semibold'>
					{product?.data?.discountPrice}${' '}
					<span className='text-gray-700 line-through'>
						{' '}
						{product?.data?.price}$
					</span>
				</p>

				<p className='text-gray-600 text-sm leading-relaxed'>
					{product?.data?.description}
				</p>

				<div>
					<span className='text-sm font-medium text-gray-700'>Colours:</span>
					<div className='flex space-x-2 mt-2'>
						<button
							style={{ backgroundColor: product?.data?.color }}
							className='w-6 h-6 rounded-full border-2 p-4 border-gray-300'
						/>
					</div>
				</div>

				<div>
					<span className='text-sm font-medium text-gray-700'>Size:</span>{' '}
					<br />
					<Button className='text-sm font-medium text-gray-200 bg-gray-400'>
						{product?.data?.size}
					</Button>
				</div>
				<div className='flex gap-[20px] items-center'>
					<Button className='w-[90%] lg:w-auto cursor-pointer md:w-auto bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600'>
						Buy Now
					</Button>
					<WishListBtn
						id={product?.data?.id}
						name={product?.data?.productName}
						image={product?.data?.images[0].images}
						price={product?.data?.price}
						originalPrice={product?.data?.price}
						rating={product?.data?.discountPrice}
						reviewCount={223}
					/>
				</div>

				<div className='text-sm text-gray-600 space-y-1'>
					<p className='text-[16px] flex gap-[10px] font-bold border-[2px] p-2 text-[black] border-[#7b7b7b]'>
						<TruckIcon />
						Free Delivery: <br /> Enter your postal code for delivery availability
					</p>
					<p className='text-[16px] flex gap-[10px] font-bold border-[2px] p-2 text-[black] border-[#5f5f5f]'>
					<RotateCcw/>Return Delivery: <br /> Free 30 days delivery returns
					</p>
				</div>
			</div>
		</div>
	)
}
