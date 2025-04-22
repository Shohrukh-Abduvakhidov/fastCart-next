/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { IProduct2 } from '@/entities/Products/model/productTypes'
import { ProductCardProps } from '@/entities/Products/ui/card'
import { Heart } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const WishListBtn = ({
	id,
	name,
	price,
	discount,
	originalPrice,
	image,
	rating,
	reviewCount,
}: ProductCardProps) => {
	const product: IProduct2 = {
		id,
		productName: name,
		price: price,
		discountPrice: discount ?? 0,
		originalPrice: originalPrice,
		image: image,
		rating: rating,
		reviewCount: reviewCount,
		color: '',
		hasDiscount: false,
		quantity: '',
		productInMyCart: false,
		categoryId: 0,
		categoryName: '',
		productInfoFromCart: null,
	}

	const [isSaved, setIsSaved] = useState<boolean>(false)

	useEffect(() => {
		const existing = JSON.parse(
			localStorage.getItem('wishList') || '[]'
		) as IProduct2[]
		const exists = existing.some(el => el.id === product.id)
		setIsSaved(exists)
	}, [])

	const addProduct = () => {
		const existing = JSON.parse(
			localStorage.getItem('wishList') || '[]'
		) as IProduct2[]
		const exists = existing.some(el => el.id === product.id)

		if (!exists) {
			const updated = [...existing, product]
			localStorage.setItem('wishList', JSON.stringify(updated))
			console.log('Добавлен в избранное:', product)
			toast.success('Succesfuly add product In WishList')
			setIsSaved(true)
		} else {
			console.log('Продукт уже в избранном.')
			toast.error('Продукт уже в избранном.')
		}
	}

	return (
		<>
			<Toaster />
			<button
				onClick={addProduct}
				type='button'
				className='bg-white p-2 rounded-full cursor-pointer shadow-sm hover:bg-gray-100 transition-colors'
			>
				<Heart
					className={`h-5 w-5 ${isSaved ? 'text-red-500' : 'bg-transparent'}`}
				/>
			</button>
		</>
	)
}

export default WishListBtn
