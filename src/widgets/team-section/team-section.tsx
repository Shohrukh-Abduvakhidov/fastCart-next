'use client'

import { Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import human1 from '@/app/assets/Frame 874.png'
import human2 from '@/app/assets/Frame 875.png'
import human3 from '@/app/assets/Frame 876.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const TeamSection = () => {
	const t = useTranslations('aboutPage.team.members')

	const teamMembers = [
		{
			img: human1,
			name: t('0.name'),
			position: t('0.position'),
			socials: ['twitter', 'linkedin'],
		},
		{
			img: human2,
			name: t('1.name'),
			position: t('1.position'),
			socials: ['twitter', 'instagram', 'linkedin'],
		},
		{
			img: human3,
			name: t('2.name'),
			position: t('2.position'),
			socials: ['twitter', 'instagram', 'linkedin'],
		},
	]

	const getIcon = (platform: string) => {
		switch (platform) {
			case 'twitter':
				return <Twitter className='h-5 w-5' />
			case 'linkedin':
				return <Linkedin className='h-5 w-5' />
			case 'instagram':
				return <Instagram className='h-5 w-5' />
			default:
				return null
		}
	}

	return (
		<div>
			<div className='mb-16'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{teamMembers.map((member, index) => (
						<div key={index} className='flex flex-col items-center'>
							<div className='bg-gray-100 rounded-lg w-full aspect-square mb-4 overflow-hidden'>
								<Image
									src={member.img}
									alt={member.name}
									width={300}
									height={300}
									className='w-full h-full object-cover'
								/>
							</div>
							<h3 className='text-lg font-bold'>{member.name}</h3>
							<p className='text-gray-600 mb-3'>{member.position}</p>
							<div className='flex space-x-3'>
								{member.socials.map((platform, i) => (
									<a
										key={i}
										href='#'
										className='text-gray-500 hover:text-gray-800'
									>
										{getIcon(platform)}
									</a>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Pagination Dots */}
				<div className='flex justify-center mt-8 space-x-2'>
					{[0, 1, 2, 3, 4].map(index => (
						<button
							key={index}
							className={`h-2 w-2 rounded-full ${
								index === 0 ? 'bg-red-500' : 'bg-gray-300'
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default TeamSection
