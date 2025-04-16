'use client'

import { DollarSign, Globe, ShoppingBag, User } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'

const StatSection = () => {
	const t = useTranslations('aboutPage.stats')

	return (
		<div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16'>
				<div className='border rounded-lg p-6 flex flex-col items-center text-center'>
					<div className='bg-gray-100 p-3 rounded-full mb-4'>
						<Globe className='h-6 w-6' />
					</div>
					<h3 className='text-2xl font-bold mb-1'>{t('sellers.value')}</h3>
					<p className='text-gray-600 text-sm'>{t('sellers.description')}</p>
				</div>

				<div className='border rounded-lg p-6 flex flex-col items-center text-center bg-red-500 text-white'>
					<div className='bg-white bg-opacity-20 p-3 rounded-full mb-4'>
						<DollarSign className='h-6 w-6 text-[black]' />
					</div>
					<h3 className='text-2xl font-bold mb-1'>{t('sales.value')}</h3>
					<p className='text-white text-sm'>{t('sales.description')}</p>
				</div>

				<div className='border rounded-lg p-6 flex flex-col items-center text-center'>
					<div className='bg-gray-100 p-3 rounded-full mb-4'>
						<ShoppingBag className='h-6 w-6' />
					</div>
					<h3 className='text-2xl font-bold mb-1'>{t('pickups.value')}</h3>
					<p className='text-gray-600 text-sm'>{t('pickups.description')}</p>
				</div>

				<div className='border rounded-lg p-6 flex flex-col items-center text-center'>
					<div className='bg-gray-100 p-3 rounded-full mb-4'>
						<User className='h-6 w-6' />
					</div>
					<h3 className='text-2xl font-bold mb-1'>{t('grossSales.value')}</h3>
					<p className='text-gray-600 text-sm'>{t('grossSales.description')}</p>
				</div>
			</div>
		</div>
	)
}

export default StatSection
