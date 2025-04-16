import Image from 'next/image'
import React from 'react'
import sideImage from '@/app/assets/Side Image.png'
import { useTranslations } from 'next-intl'

const OurStory = () => {
	const t = useTranslations('aboutPage')

	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
				<div>
					<h1 className='text-3xl font-bold mb-6'>{t('ourStory.title')}</h1>
					<div className='space-y-4'>
						<p className='text-gray-700'>{t('ourStory.paragraphs.0')}</p>
						<p className='text-gray-700'>{t('ourStory.paragraphs.1')}</p>
						<p className='text-gray-700'>{t('ourStory.paragraphs.2')}</p>
					</div>
				</div>
				<div className='flex justify-center md:justify-end'>
					<div className='relative w-full max-w-md h-80 md:h-96 bg-pink-400 rounded-lg overflow-hidden'>
						<Image
							src={sideImage}
							alt='Two women smiling'
							fill
							className='object-cover'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurStory
