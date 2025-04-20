/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useGetCategoryQuery } from '../api/categoryApi'
import Loading from '@/shared/ui/loading/loading'
import { ICategory } from '../model/types'
import Link from 'next/link'

const CategoryAside = () => {
	const { data: categories, isLoading, error } = useGetCategoryQuery(undefined)

	if (isLoading) return <Loading />
	if (error) return <p>Error loading categories</p>

	return (
		<div className='lg:w-[20%] max-h-[300px] overflow-y-auto lg:border-r border-gray-300 px-4 py-3'>
			<ul className='flex lg:flex-col flex-wrap gap-2'>
				{categories?.data?.map((category: ICategory) => (
					<li
						key={category.id}
						className='cursor-pointer py-2 px-1 hover:bg-gray-100 rounded'
					>
						<Link
							href={'/products'}
							className='text-[14px] text-black hover:underline'
						>
							{category.categoryName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CategoryAside
