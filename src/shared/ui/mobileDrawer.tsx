'use client'

import LocaleSwitcher from '@/widgets/localeSwitcher/switcher'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const MobileDrawer = ({
	open,
	setOpen,
}: {
	open: boolean
	setOpen: (open: boolean) => void
}) => {
	const t = useTranslations('navbar')

	return (
		<>
			{open && (
				<div className='w-[300px] fixed z-50 h-screen bg-black/60 shadow-md'>
					<div className='flex items-center justify-between p-4'>
						<X
							onClick={() => setOpen(false)}
							className='text-white cursor-pointer'
							size={24}
						/>
					</div>
					<ul className='flex flex-col gap-[20px] items-center text-[#fff] font-bold'>
						<li>
							<Link href={'/'}>{t('home')}</Link>
						</li>
						<li>
							<Link href={'/contact'}>{t('contact')}</Link>
						</li>
						<li>
							<Link href={'/about'}>{t('about')}</Link>
						</li>
						<li>
							<Link href={'/registration'}>{t('signUp')}</Link>
						</li>
					</ul>
					<div className='w-[80px] py-[20px] text-[#fff] m-auto'>
					<LocaleSwitcher />
					</div>
				</div>
			)}
		</>
	)
}

export default MobileDrawer
