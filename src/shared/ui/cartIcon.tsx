'use client'
import { useGetCartProductsQuery } from '@/features/cart/api/cartApi'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
	const { data } = useGetCartProductsQuery(undefined)
	console.log('====================================')
	console.log(data?.data[0]?.totalProducts)
	console.log('====================================')
	return (
		<div className='relative'>
			{data?.data[0]?.totalProducts >= 1 && (
				<p className='bg-[#DB4444] flex items-center justify-center text-[#fff] font-semibold absolute z-50 top-[-40%] right-[-35%] w-[20px] h-[20px] rounded-full'>
					{data?.data[0]?.totalProducts}
				</p>
			)}
			<Link href={'/cart'}>
				<ShoppingCart
					size={25}
					className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl'
				/>
			</Link>
		</div>
	)
}

export default CartIcon
