'use client'

import type React from 'react'

import { useState } from 'react'
import {
	ChevronLeft,
	ChevronRight,
	Smartphone,
	Monitor,
	Watch,
	Camera,
	Headphones,
	Gamepad,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGetCategoryQuery } from '@/features/categoryAside/api/categoryApi'
import { ICategory } from '@/features/categoryAside/model/types'
import { productApi } from '@/entities/Products/api/productApi'
import Link from 'next/link'

interface Category {
	id: string
	name: string
	icon: React.ReactNode
}

export function CategoryBrowser() {
	const [selectedCategory, setSelectedCategory] = useState(0)
	const { data } = useGetCategoryQuery(undefined)
	return (
		<div className='w-[90%] m-auto'>
			<div className='flex items-center justify-between mb-6'>
				<div className='flex items-center space-x-2'>
					<div className='relative'>
						<div className='absolute left-0 top-0 h-full w-1 bg-red-500'></div>
						<div className='pl-3 text-red-500 text-sm font-medium'>
							Categories
						</div>
					</div>

					{/* Browse By Category text */}
					<h2 className='text-2xl font-bold ml-2'>Browse By Category</h2>
				</div>

				{/* Navigation arrows */}
				<div className='flex space-x-2'>
					<button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'>
						<ChevronLeft className='h-4 w-4' />
					</button>
					<button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'>
						<ChevronRight className='h-4 w-4' />
					</button>
				</div>
			</div>

			{/* Category cards */}
			<div
				style={{ scrollbarWidth: 'none' }}
				className='flex items-center gap-4 overflow-x-auto'
			>
				{data?.data?.map((category: ICategory) => (
					<Link className='cursor-pointer' key={category.id} href={'/products'}>
						<button
							className={cn(
								'flex cursor-pointer flex-col items-center justify-center p-6 border rounded-md transition-colors',
								selectedCategory == category.id
									? 'bg-red-500 text-white border-red-500'
									: 'bg-white hover:border-gray-300'
							)}
							onClick={() => setSelectedCategory(category.id)}
						>
							<img
								src={`https://store-api.softclub.tj/images/${category.categoryImage}`}
								alt=''
							/>
							<span className='mt-2 text-sm font-medium'>
								{category.categoryName}
							</span>
						</button>
					</Link>
				))}
			</div>

			{/* Divider */}
			<div className='w-full h-px bg-gray-200 mt-8'></div>
		</div>
	)
}
