'use client'
/* eslint-disable @next/next/no-img-element */
import { useGetProductByIdQuery } from '@/entities/Products/api/productApi'
import { Button } from '@/shared/ui/button'
import Loading from '@/shared/ui/loading/loading'
import ImageGallery from '@/widgets/imageGalery/imageGalery'
import { useParams } from 'next/navigation'

export default function ProductPage() {
	const params = useParams()
	const productId = params.id
	console.log(productId)
	const { data: product, error, isLoading } = useGetProductByIdQuery(productId)
	if (isLoading) {
		return <Loading/>
	}
	if (error) {
		return <div>Loading....</div>
	}

	console.log(product?.data)

	return (
		<div className='p-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10'>
			<ImageGallery images={product?.data?.images} />

			<div className='space-y-6'>
				<h1 className='text-3xl font-bold text-gray-800'>
					{product?.data?.productName}
				</h1>

				<p className='text-2xl text-red-600 font-semibold'>
          {product?.data?.discountPrice}$ <span className='text-gray-700 line-through'> {product?.data?.price}$</span>
        </p>

				<p className='text-gray-600 text-sm leading-relaxed'>
					{product?.data?.description}
				</p>
				
				<div>
					<span className='text-sm font-medium text-gray-700'>Colours:</span>
					<div className='flex space-x-2 mt-2'>
						<button className='w-6 h-6 rounded-full bg-red-500 border-2 border-gray-300' />
						<button className='w-6 h-6 rounded-full bg-black border-2 border-gray-300' />
					</div>
				</div>
				
				<div>
					<span className='text-sm font-medium text-gray-700'>Size:</span>
          <span className='text-sm font-medium text-gray-700'> {product?.data?.size}</span>
				</div>
				
				<Button className='w-full cursor-pointer md:w-auto bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600'>
					Buy Now
				</Button>
				
				<div className='text-sm text-gray-600 space-y-1'>
					<p>Free Delivery: Enter your postal code for delivery availability</p>
					<p>Return Delivery: Free 30 days delivery returns</p>
				</div>
			</div>
		</div>
	)
}
