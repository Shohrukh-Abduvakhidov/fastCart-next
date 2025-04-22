'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import Image, { StaticImageData } from 'next/image'
import { Clock, Headphones, ShieldCheck } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { useTranslations } from 'next-intl'

import ps5 from '@/app/assets/ps5-slim-goedkope-playstation_large 1.png'
import womans from '@/app/assets/attractive-woman-wearing-hat-posing-black-background 1.png'
import speakers from '@/app/assets/Frame 686.png'
import parfum from '@/app/assets/Frame 687.png'

interface ProductCardProps {
	title: string
	description: string
	image: StaticImageData
	size?: 'large' | 'small'
}

function ProductCard({
	title,
	description,
	image,
	size = 'small',
}: ProductCardProps) {
	const t = useTranslations('newArrivals')

	return (
		<div
			className={`relative overflow-hidden rounded-lg ${
				size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
			}`}
		>
			<div className='absolute inset-0 bg-black'>
				<Image
					src={image || '/placeholder.svg'}
					alt={title}
					fill
					className='object-cover opacity-80 hover:opacity-90 transition-opacity'
				/>
			</div>
			<div className='relative h-full flex flex-col justify-end p-6 text-white'>
				<h3
					className={`font-bold ${
						size === 'large' ? 'text-2xl' : 'text-xl'
					} mb-1`}
				>
					{title}
				</h3>
				<p className='text-sm text-gray-300 mb-4'>{description}</p>
				<Button
					variant='outline'
					className='w-fit bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors'
				>
					{t('shopNow')}
				</Button>
			</div>
		</div>
	)
}

export function NewArrivals() {
	const t = useTranslations('newArrivals')

	return (
		<section className='w-full py-12'>
			<div className='container px-4 mx-auto'>
				<div className='mb-8'>
					<div className='flex items-center gap-2 mb-2'>
						<div className='w-1 h-6 bg-red-500'></div>
						<span className='text-red-500 text-sm font-medium'>
							{t('sectionLabel')}
						</span>
					</div>
					<h2 className='text-2xl md:text-3xl font-bold'>
						{t('sectionTitle')}
					</h2>
				</div>

				<div className='grid lg:grid-cols-4 lg:gap-4 gap-8 mb-16'>
					<ProductCard
						title={t('ps5Title')}
						description={t('ps5Desc')}
						image={ps5}
						size='large'
					/>

					<div className='col-span-2 grid lg:grid-rows-2 gap-4'>
						<ProductCard
							title={t('womensTitle')}
							description={t('womensDesc')}
							image={womans}
						/>

						<div className='grid lg:grid-cols-2 gap-4'>
							<ProductCard
								title={t('speakersTitle')}
								description={t('speakersDesc')}
								image={speakers}
							/>
							<ProductCard
								title={t('perfumeTitle')}
								description={t('perfumeDesc')}
								image={parfum}
							/>
						</div>
					</div>
				</div>

				{/* Service Features */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='flex flex-col items-center text-center'>
						<div className='bg-gray-100 p-4 rounded-full mb-4'>
							<Clock className='h-6 w-6' />
						</div>
						<h3 className='font-bold text-lg mb-2'>{t('service1Title')}</h3>
						<p className='text-sm text-gray-500'>{t('service1Desc')}</p>
					</div>
					<div className='flex flex-col items-center text-center'>
						<div className='bg-gray-100 p-4 rounded-full mb-4'>
							<Headphones className='h-6 w-6' />
						</div>
						<h3 className='font-bold text-lg mb-2'>{t('service2Title')}</h3>
						<p className='text-sm text-gray-500'>{t('service2Desc')}</p>
					</div>
					<div className='flex flex-col items-center text-center'>
						<div className='bg-gray-100 p-4 rounded-full mb-4'>
							<ShieldCheck className='h-6 w-6' />
						</div>
						<h3 className='font-bold text-lg mb-2'>{t('service3Title')}</h3>
						<p className='text-sm text-gray-500'>{t('service3Desc')}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
