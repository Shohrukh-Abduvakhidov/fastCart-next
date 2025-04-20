/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import { RootState } from '@/store/store'
import { LogOutIcon, ShoppingBag, User2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ProfileModal = () => {
	const stateModal = useSelector((state: RootState) => state.profile.isOpen)
	const router = useRouter()

	if (!stateModal) return null
	const logOut = () => {
		localStorage.removeItem('access_token')
		router.push('/registration')
	}

	return (
		<div className='absolute lg:w-[198px] py-[10px] lg:h-[170px] rounded-lg bg-black/60 right-7 top-15 z-20 text-[#fff]'>
			<Link
				href='/account'
				className='flex w-[70%] cursor-pointer m-auto py-[10px] gap-[20px] items-center'
			>
				<User2 size={30} />
				<p className='text-[#fff] text-[20px]'>Account</p>
			</Link>
			<div className='flex w-[70%] cursor-pointer m-auto py-[10px] gap-[20px] items-center'>
				<ShoppingBag size={30} />
				<p className='text-[#fff] text-[20px]'>My Order</p>
			</div>
			<div
				onClick={logOut}
				className='flex w-[70%] cursor-pointer m-auto py-[10px] gap-[20px] items-center'
			>
				<LogOutIcon size={30} />
				<p className='text-[#fff] text-[20px]'>Logout</p>
			</div>
		</div>
	)
}

export default ProfileModal
