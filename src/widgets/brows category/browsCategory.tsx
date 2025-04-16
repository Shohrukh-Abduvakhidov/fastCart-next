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

interface Category {
	id: string
	name: string
	icon: React.ReactNode
}

export function CategoryBrowser() {
	const [selectedCategory, setSelectedCategory] = useState('camera')

	const categories: Category[] = [
		{
			id: 'phones',
			name: 'Phones',
			icon: <Smartphone className='h-8 w-8' />,
		},
		{
			id: 'computers',
			name: 'Computers',
			icon: <Monitor className='h-8 w-8' />,
		},
		{
			id: 'smartwatch',
			name: 'SmartWatch',
			icon: <Watch className='h-8 w-8' />,
		},
		{
			id: 'camera',
			name: 'Camera',
			icon: <Camera className='h-8 w-8' />,
		},
		{
			id: 'headphones',
			name: 'HeadPhones',
			icon: <Headphones className='h-8 w-8' />,
		},
		{
			id: 'gaming',
			name: 'Gaming',
			icon: <Gamepad className='h-8 w-8' />,
		},
	]

	return (
		<div className='w-[90%] m-auto'>
			<div className='flex items-center justify-between mb-6'>
				<div className='flex items-center space-x-2'>
					{/* Red tag with "Categories" text */}
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
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
				{categories.map(category => (
					<button
						key={category.id}
						className={cn(
							'flex flex-col items-center justify-center p-6 border rounded-md transition-colors',
							selectedCategory === category.id
								? 'bg-red-500 text-white border-red-500'
								: 'bg-white hover:border-gray-300'
						)}
						onClick={() => setSelectedCategory(category.id)}
					>
						{category.icon}
						<span className='mt-2 text-sm font-medium'>{category.name}</span>
					</button>
				))}
			</div>

			{/* Divider */}
			<div className='w-full h-px bg-gray-200 mt-8'></div>
		</div>
	)
}
