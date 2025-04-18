'use client'

import { useGetProductsQuery } from '@/entities/Products/api/productApi'
import { IProduct } from '@/entities/Products/model/productTypes'
import { ProductCard } from '@/entities/Products/ui/card'
import Loading from '@/shared/ui/loading/loading'

export function ProductList({ style }: { style?: string }) {
	const { data: products, isLoading, error } = useGetProductsQuery(undefined)

	if (isLoading) {
		return <Loading />
	}

	if (error) {
		return <div>Error loading products</div>
	}

	if (style) {
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

	return (
		<div className='w-[90%] m-auto overflow-x-auto py-[50px]'>
			<div className='flex items-center gap-[20px] flex-nowrap'>
				{products?.data?.products?.map((product: IProduct) => (
					<div key={product.id} className='min-w-[250px] max-w-[300px]'>
						<ProductCard
							id={String(product.id)}
							name={product.productName}
							image={product.image}
							price={product.price}
							originalPrice={product.price}
							discount={product.discountPrice}
							rating={0}
							reviewCount={0}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
