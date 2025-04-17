// src/entities/Products/ui/ProductList.tsx
'use client'

import { useGetProductsQuery } from '@/entities/Products/api/productApi'
import { IProduct } from '@/entities/Products/model/productTypes'
import { ProductCard } from '@/entities/Products/ui/card'

export function ProductList() {
	const { data: products, isLoading, error } = useGetProductsQuery(undefined)

	console.log('====================================')
	console.log(products)
	console.log('====================================')
	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error loading products</div>
	}

	return (
		<div className='grid grid-cols-1 w-[90%] m-auto py-[50px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{products?.data?.products?.map((product: IProduct) => (
				<ProductCard
					key={product.id}
					id={String(product.id)}
					name={product.productName}
					image={product.image}
					price={product.price}
					originalPrice={product.price}
					discount={product.discountPrice}
					rating={0}
					reviewCount={0}
				/>
			))}
		</div>
	)
}
