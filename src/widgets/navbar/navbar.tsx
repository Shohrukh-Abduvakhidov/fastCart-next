'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/app/assets/logo.png'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Input } from '@/shared/ui/input'
import { Heart, Menu, Search, ShoppingCart, User2 } from 'lucide-react'
import LocaleSwitcher from '../localeSwitcher/switcher'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { openModalProfile } from '@/features/profileSlice/model/profileSlice'
import ProfileModal from '@/features/profileSlice/ui/profileModal'

const Navbar = () => {
	const t = useTranslations('navbar')
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const dispatch = useDispatch()
	const stateModal = useSelector((state: RootState) => state.profile.isOpen)
	return (
		<>
			<nav className='w-[95%] hidden md:flex py-[10px] items-center justify-between m-auto'>
				<ProfileModal />
				<div className='flex items-center justify-between gap-[70px]'>
					<Image src={Logo || '/placeholder.svg'} alt='logo' />
					<ul className='flex gap-[20px] items-center'>
						<li className=''>
							<Link href={'/'}>{t('home')}</Link>
						</li>
						<li className=''>
							<Link href={'/contact'}>{t('contact')}</Link>
						</li>
						<li className=''>
							<Link href={'/about'}>{t('about')}</Link>
						</li>
						<li className=''>
							<Link href={'/registration'}>{t('signUp')}</Link>
						</li>
					</ul>
				</div>
				<div className='flex gap-[30px] items-center'>
					<LocaleSwitcher />
					<div className='relative'>
						<Input
							placeholder={t('searchPlaceholder')}
							className='border text-[black] px-[30px] py-[5px] border-[gray]'
						/>
						<Search className='absolute top-2 right-2' size={20} />
					</div>
					<div className='flex gap-[20px] items-center'>
						<Heart
							size={25}
							className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl'
						/>
						<Link href={'/cart'}>
							<ShoppingCart
								size={25}
								className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl'
							/>
						</Link>
						<User2
							size={25}
							className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl'
							onClick={() => dispatch(openModalProfile(!stateModal))}
						/>
					</div>
				</div>
			</nav>

			<nav className='md:hidden w-full bg-white'>
				<div className='flex items-center justify-between px-4 py-3 border-b'>
					<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
						<Menu size={24} />
					</button>
					<h1 className='text-xl font-bold'>Exclusive</h1>
					<div className='flex items-center gap-4'>
						<div className='relative'>
							<ShoppingCart size={24} />
							<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
								2
							</span>
						</div>
						<User2 size={24} />
					</div>
				</div>

				<div className='p-4'>
					<div className='relative'>
						<Input
							placeholder='Search'
							className='w-full border border-gray-300 rounded-md py-2 pl-3 pr-10'
						/>
						<button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
							<Search size={20} />
						</button>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
