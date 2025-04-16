import { RootState } from '@/app/store'
import { LogOutIcon, ShoppingBag, User2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const ProfileModal = () => {
	const stateModal = useSelector((state: RootState) => state.profile.isOpen)

	if (!stateModal) return null

	return (
		<div className='fixed w-[198px] py-[10px] h-[170px] rounded-lg bg-black/60 right-7 top-15 z-20 text-[#fff]'>
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
			<div className='flex w-[70%] cursor-pointer m-auto py-[10px] gap-[20px] items-center'>
				<LogOutIcon size={30} />
				<p className='text-[#fff] text-[20px]'>Logout</p>
			</div>
		</div>
	)
}

export default ProfileModal
