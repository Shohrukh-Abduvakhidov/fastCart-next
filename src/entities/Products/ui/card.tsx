/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/entities/Products/ui/ProductCard.tsx
'use client'

import { Heart, Eye, Star } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import Link from 'next/link'
import {
	useAddProductInCartMutation,
	useGetCartProductsQuery,
} from '@/features/cart/api/cartApi'
import WishListBtn from '@/shared/ui/wishListBtn'
import { original } from '@reduxjs/toolkit'

export interface ProductCardProps {
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
	const [addProductInCart] = useAddProductInCartMutation()
	const { refetch } = useGetCartProductsQuery(undefined)
	async function addProductCart() {
		try {
			await addProductInCart(id).unwrap()
			toast.success('SuccesFully added Product in cart')
			refetch()
		} catch (error) {
			toast.error('Не удалось добавить товар в корзину. Попробуйте позже.')
			console.error(error)
		}
	}
	const stars = Array(5)
		.fill(0)
		.map((_, index) => index < Math.floor(rating))

	return (
		<div
			className='group flex-shrink-0 relative cursor-pointer bg-gray-100 rounded-md overflow-hidden'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Toaster />
			{discount !== undefined && discount >= 1 && (
				<div className='absolute z-20 top-3 left-3 bg-red-500 text-white text-sm font-medium px-2 py-1 rounded'>
					-{Math.round(((originalPrice - discount) / originalPrice) * 100)}%
				</div>
			)}

			<div className='absolute z-20 top-3 right-3 flex flex-col gap-3'>
				<WishListBtn
					name={name}
					price={price}
					discount={discount}
					id={id}
					image={image}
					originalPrice={originalPrice}
					rating={0}
					reviewCount={0}
				/>
				<Link
					href={`/products/${id}`}
					className='bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors'
				>
					<Eye className='h-5 w-5' />
				</Link>
			</div>

			<div className='w-full h-[300px] bg-white'>
				<img
					src={
						`https://store-api.softclub.tj/images/${image}` ||
						'/placeholder.svg'
					}
					alt={name}
					className='w-full h-full object-contain p-4'
				/>
			</div>

			<div
				className={cn(
					'absolute bottom-[137] left-0 right-0 transition-transform duration-300 transform',
					isHovered ? 'translate-y-0' : 'translate-y-full hidden'
				)}
			>
				<Button
					onClick={addProductCart}
					variant='default'
					className='w-full cursor-pointer rounded-md bg-black hover:bg-black/80 h-12'
				>
					Add To Cart
				</Button>
			</div>

			<div className='p-4'>
				<h3 className='font-medium text-lg z-20 pt-[40px] text-[black]'>
					{name}
				</h3>
				<div className='flex items-center mt-2'>
					<span className='text-red-500 font-bold'>${discount}</span>
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
