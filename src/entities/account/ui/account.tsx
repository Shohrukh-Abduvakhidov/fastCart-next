/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Input } from '@/shared/ui/input'
import React, { useEffect, useState } from 'react'
import { useGetProfileByIdQuery } from '../api/accountApi'
import { IDecode } from '../model/types'

const Account = () => {
	const [user, setUser] = useState<IDecode | null>(null)
	const { data } = useGetProfileByIdQuery(user?.sid)
	const [firstName, setFirstName] = useState<string>(
		data?.data?.firstName || ''
	)
	const [lastName, setLastName] = useState<string>(data?.data?.lastName || '')
	const [email, setEmail] = useState<string>(data?.data?.email || '')
	const [phone, setPhone] = useState<string>(data?.data?.phoneNumber || '')
	const [dob, setDob] = useState<string>(data?.data?.dob || '')

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('decode_token') || '{}'))
	}, [])

	console.log('====================================')
	console.log(data)
	console.log('====================================')

	return (
		<main className='flex-1 p-6 flex flex-col items-center'>
			<div className='w-full max-w-2xl bg-white shadow p-6 rounded-lg'>
				<div className='flex gap-[20px] items-center'>
					<h2 className='text-xl font-semibold text-red-500 mb-4'>
						Profile |
						<span className='text-[20px] py-[2px]'>{data?.data?.userName}</span>
					</h2>
					<img
						src={
							`https://store-api.softclub.tj/imaegs/${data?.data?.image}` ||
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s'
						}
						alt=''
						className='w-[70px] h-[70px] rounded-full border'
					/>
				</div>

				<form className='space-y-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Input
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							type='text'
							placeholder='First name'
						/>
						<Input
							value={lastName}
							onChange={e => setLastName(e.target.value)}
							type='text'
							placeholder='Last name'
						/>
						<Input
							value={email}
							onChange={e => setEmail(e.target.value)}
							type='email'
							placeholder='Email address'
						/>
						<Input
							value={phone}
							onChange={e => setPhone(e.target.value)}
							type='text'
							placeholder='Phone Number'
						/>
					</div>
					<h3 className='text-lg font-semibold text-gray-700'>
						Password Changes
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<Input type='password' placeholder='Current password' />
						<Input type='password' placeholder='New password' />
						<Input type='password' placeholder='Confirm new password' />
					</div>

					<div className='flex flex-col-reverse md:flex-row justify-between mt-6 gap-4'>
						<button
							type='button'
							className='text-gray-600 border border-gray-400 px-6 py-2 rounded hover:bg-gray-100'
						>
							Cancel
						</button>
						<button
							type='submit'
							className='bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600'
						>
							Save Changes
						</button>
					</div>
				</form>
			</div>
		</main>
	)
}

export default Account
