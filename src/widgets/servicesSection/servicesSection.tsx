'use client'

import { Truck, Headphones, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'

const ServicesSection = () => {
	const t = useTranslations('aboutPage.services')

	const icons = [Truck, Headphones, ShieldCheck]

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
			{[0, 1, 2].map(index => {
				const Icon = icons[index]
				return (
					<div
						key={index}
						className='flex flex-col items-center text-center'
					>
						<div className='bg-gray-100 p-4 rounded-full mb-4'>
							<Icon className='h-6 w-6' />
						</div>
						<h3 className='font-bold text-lg mb-2'>
							{t(`${index}.title`)}
						</h3>
						<p className='text-sm text-gray-500'>
							{t(`${index}.description`)}
						</p>
					</div>
				)
			})}
		</div>
	)
}

export default ServicesSection
