'use client'

import { IProduct2 } from '@/entities/Products/model/productTypes'
import { ProductCard } from '@/entities/Products/ui/card'
import { Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const WishlistPage = () => {
	const [products, setProducts] = useState<IProduct2[]>([])

	useEffect(() => {
		const stored = localStorage.getItem('wishList')
		if (stored) {
			setProducts(JSON.parse(stored))
		}
	}, [])
	function deleteProduct(id: number | string) {
		const fillteredProducts = products.filter(product => product.id !== id)
		setProducts(fillteredProducts)
		localStorage.setItem('wishList', JSON.stringify(fillteredProducts))
	}

	return (
		<div className='pb-[100px]'>
			<div className='flex w-[90%] m-auto items-center justify-between'>
				<p className='text-[20px] font-bold'>
					WishList <span>({products?.length})</span>
				</p>
			</div>
			<div className='w-[90%] m-auto grid md:grid-cols-3 py-[40px] lg:grid-cols-4 gap-[20px]'>
				{products?.map(product => (
					<div key={product.id} className='relative'>
						<button
							onClick={() => deleteProduct(product.id)}
							className='bg-[white] w-[45px] h-[45px] flex items-center justify-center rounded-full absolute z-50 top-2 right-2 cursor-pointer'
						>
							<Trash2 />
						</button>
						<ProductCard
							id={product.id.toString()}
							image={product.image}
							name={product.productName}
							originalPrice={product.price}
							price={product.price}
							rating={3}
							reviewCount={200}
							discount={product.discountPrice}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default WishlistPage
