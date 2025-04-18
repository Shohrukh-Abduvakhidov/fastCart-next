/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/shared/ui/card'

type ImageGalleryProps = {
	images: { id: number; images: string; alt?: string }[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div className='flex gap-6'>
			{/* Thumbnail preview */}
			<div className='flex flex-col gap-4'>
				{images.map((img, index) => (
					<Card
						key={img.id}
						onClick={() => setActiveIndex(index)}
						className={`cursor-pointer p-1 border ${
							index === activeIndex ? 'border-blue-500' : 'border-transparent'
						}`}
					>
						<CardContent className='p-0 w-16 h-16 relative'>
							<img
								src={`https://store-api.softclub.tj/images/${img.images}`}
								alt={img.alt || `Thumbnail ${img.id}`}
								className='object-cover rounded w-full h-full'
							/>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Main image */}
			<Card className='w-full max-w-md h-[500px] overflow-hidden'>
				<CardContent className='relative w-full h-full p-4 flex items-center justify-center'>
					<img
						src={`https://store-api.softclub.tj/images/${images[activeIndex].images}`}
						alt={images[activeIndex].alt || 'Main image'}
						className='max-h-full max-w-full object-contain rounded'
					/>
				</CardContent>
			</Card>
		</div>
	)
}
