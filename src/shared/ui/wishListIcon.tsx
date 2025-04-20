/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Heart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const WishListIcon = () => {
	const [productsInWishList, setProductsInWishList] = useState<any[]>([])

	useEffect(() => {
		const loadWishList = () => {
			const data = JSON.parse(localStorage.getItem('wishList') || '[]')
			setProductsInWishList(data)
		}

		loadWishList()

		const interval = setInterval(() => {
			loadWishList()
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='relative'>
			{productsInWishList.length > 0 && (
				<p className='bg-[#DB4444] flex items-center justify-center text-[#fff] font-semibold absolute z-50 top-[-40%] right-[-35%] w-[20px] h-[20px] rounded-full'>
					{productsInWishList.length}
				</p>
			)}
			<Link href={'/wishlist'}>
				<Heart
					size={25}
					className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl'
				/>
			</Link>
		</div>
	)
}

export default WishListIcon
