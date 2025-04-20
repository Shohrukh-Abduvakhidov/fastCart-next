'use client'

import Logo from '@/app/assets/logo.png'
import { openModalProfile } from '@/features/profileSlice/model/profileSlice'
import ProfileModal from '@/features/profileSlice/ui/profileModal'
import { Input } from '@/shared/ui/input'
import { RootState } from '@/store/store'
import { Menu, Search, User2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LocaleSwitcher from '../localeSwitcher/switcher'
import CartIcon from '@/shared/ui/cartIcon'
import WishListIcon from '@/shared/ui/wishListIcon'
import MobileDrawer from '@/shared/ui/mobileDrawer'

const Navbar = () => {
	const t = useTranslations('navbar')
	const [open, setOpen] = useState<boolean>(false)
	const dispatch = useDispatch()
	const stateModal = useSelector((state: RootState) => state.profile.isOpen)

	return (
		<>
			{/* Desktop Navbar */}
			<nav className='w-[95%] hidden md:flex py-[10px] items-center justify-between m-auto'>
				<ProfileModal />
				<div className='flex items-center justify-between gap-[70px]'>
					<Image
						src={Logo || '/placeholder.svg'}
						alt='logo'
						width={150}
						height={50}
					/>
					<ul className='flex gap-[20px] items-center'>
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
						<WishListIcon />
						<CartIcon />
						<User2
							size={25}
							className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl'
							onClick={() => dispatch(openModalProfile(!stateModal))}
						/>
					</div>
				</div>
			</nav>

			{/* Mobile Navbar */}
			<nav className='md:hidden w-full bg-white'>
				<MobileDrawer open={open} setOpen={setOpen} />
				<div className='flex items-center justify-between px-4 py-3 border-b'>
					<div className='flex gap-[20px] items-center'>
						<button onClick={() => setOpen(true)}>
							<Menu size={24} />
						</button>
						<h1 className='text-xl font-bold'>Exclusive</h1>
					</div>
					<div className='flex items-center gap-4'>
						<CartIcon />
						<User2
							size={25}
							className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl'
							onClick={() => dispatch(openModalProfile(!stateModal))}
						/>
					</div>
				</div>

				<div className='p-4'>
					<div className='relative'>
						<Input
							placeholder={t('searchPlaceholder')}
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
