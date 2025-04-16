'use client'
/* eslint-disable @next/next/no-img-element */
import { useParams } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import ps5 from '@/app/assets/ps5-slim-goedkope-playstation_large 1.png'

export default function ProductPage() {
	const params = useParams()
	const productId = params.id
	console.log(productId)

	return (
		<div className='p-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10'>
			{/* Left Side: Images */}
			<div className='flex flex-col md:flex-row gap-4'>
				{/* Thumbnails */}
				<div className='flex md:flex-col overflow-y-scroll gap-4 overflow-x-auto md:overflow-y-auto max-h-[500px]'>
					{[1, 2, 3, 4].map((_, idx) => (
						<img
							key={idx}
							src={`/controller-${idx + 1}.jpg`}
							alt={`Thumbnail ${idx + 1}`}
							className='w-20 h-20 object-cover rounded-lg border cursor-pointer'
						/>
					))}
				</div>

				{/* Main Image */}
				<div className='flex-1'>
					<Image
						src={ps5}
						alt='Main Product Image'
						className='w-full h-full object-cover rounded-xl'
					/>
				</div>
			</div>

			{/* Right Side: Product Info */}
			<div className='space-y-6'>
				<h1 className='text-3xl font-bold text-gray-800'>
					Havic HV G-92 Gamepad
				</h1>

				<p className='text-2xl text-red-600 font-semibold'>$192.00</p>

				<p className='text-gray-600 text-sm leading-relaxed'>
					PlayStation Controller Skin high quality acrylic material for PS5
					Controller. Customize your controller with style and protect it from
					scratches and damage.
				</p>

				{/* Color Options */}
				<div>
					<span className='text-sm font-medium text-gray-700'>Colours:</span>
					<div className='flex space-x-2 mt-2'>
						<button className='w-6 h-6 rounded-full bg-red-500 border-2 border-gray-300' />
						<button className='w-6 h-6 rounded-full bg-black border-2 border-gray-300' />
					</div>
				</div>

				{/* Size Options */}
				<div>
					<span className='text-sm font-medium text-gray-700'>Size:</span>
					<div className='flex space-x-2 mt-2'>
						{['S', 'M', 'L', 'XL'].map(size => (
							<button
								key={size}
								className='w-10 h-10 border text-sm rounded-md hover:bg-gray-100'
							>
								{size}
							</button>
						))}
					</div>
				</div>

				{/* CTA */}
				<button className='w-full md:w-auto bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600'>
					Buy Now
				</button>

				{/* Additional Info */}
				<div className='text-sm text-gray-600 space-y-1'>
					<p>
						📦 Free Delivery: Enter your postal code for delivery availability
					</p>
					<p>🔄 Return Delivery: Free 30 days delivery returns</p>
				</div>
			</div>
		</div>
	)
}
