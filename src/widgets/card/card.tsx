/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { Heart, Eye, Star } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { cn } from '@/lib/utils'

interface ProductCardProps {
	id: string
	name: string
	image: string
	price: number
	originalPrice: number
	discount?: number
	rating: number
	reviewCount: number
}

export function ProductCard({
	id,
	name,
	image,
	price,
	originalPrice,
	discount,
	rating,
	reviewCount,
}: ProductCardProps) {
	const [isHovered, setIsHovered] = useState(false)

	// Generate an array of 5 stars
	const stars = Array(5)
		.fill(0)
		.map((_, index) => index < Math.floor(rating))

	return (
		<div
			className='group flex-shrink-0 relative cursor-pointer bg-gray-100 rounded-md overflow-hidden'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Discount badge */}
			{discount && (
				<div className='absolute z-20 top-3 left-3 bg-red-500 text-white text-sm font-medium px-2 py-1 rounded'>
					-{discount}%
				</div>
			)}

			{/* Wishlist and view icons */}
			<div className='absolute z-20 top-3 right-3 flex flex-col gap-3'>
				<button className='bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors'>
					<Heart className='h-5 w-5' />
				</button>
				<button className='bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors'>
					<Eye className='h-5 w-5' />
				</button>
			</div>

			{/* Product image */}
			<div className='relative h-48 w-full bg-white'>
				<img
					src={image || '/placeholder.svg'}
					alt={name}
					className='object-contain p-4'
				/>
			</div>

			{/* Add to cart button (visible on hover) */}
			<div
				className={cn(
					'absolute bottom-0 left-0 right-0 transition-transform duration-300 transform',
					isHovered ? 'translate-y-0' : 'translate-y-full'
				)}
			>
				<Button
					variant='default'
					className='w-full rounded-none bg-black hover:bg-black/80 h-12'
				>
					Add To Cart
				</Button>
			</div>

			{/* Product info */}
			<div className='p-4'>
				<h3 className='font-medium text-lg z-20 pt-[40px] text-[black]'>{name}</h3>
				<div className='flex items-center mt-2'>
					<span className='text-red-500 font-bold'>${price}</span>
					<span className='text-gray-400 line-through ml-2'>
						${originalPrice}
					</span>
				</div>
				<div className='flex items-center mt-2'>
					<div className='flex'>
						{stars.map((filled, i) => (
							<Star
								key={i}
								className={cn(
									'h-4 w-4',
									filled
										? 'fill-yellow-400 text-yellow-400'
										: 'fill-gray-200 text-gray-200'
								)}
							/>
						))}
					</div>
					<span className='text-gray-500 text-sm ml-2'>({reviewCount})</span>
				</div>
			</div>
		</div>
	)
}
