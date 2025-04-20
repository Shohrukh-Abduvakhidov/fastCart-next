/* eslint-disable @next/next/no-img-element */
'use client'
import { Input } from '@/shared/ui/input'
import React, { useEffect, useState } from 'react'
import {
	useEditUserProfileMutation,
	useGetProfileByIdQuery,
} from '../api/accountApi'
import { IDecode } from '../model/types'
import Loading from '@/shared/ui/loading/loading'

const Account: React.FC = () => {
	const [user, setUser] = useState<IDecode | null>(null)
	const { data, isLoading, refetch } = useGetProfileByIdQuery(user?.sid, {
		skip: !user?.sid,
	})
	const [editUserProfile] = useEditUserProfileMutation()
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [dob, setDob] = useState<string>('')
	const [imageS, setImageS] = useState<File | null>(null)

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('decode_token') || '{}'))
	}, [])

	useEffect(() => {
		if (data) {
			setFirstName(data?.data?.firstName || '')
			setLastName(data?.data?.lastName || '')
			setEmail(data?.data?.email || '')
			setPhone(data?.data?.phoneNumber || '')
			setDob(data?.data?.dob || '')
		}
	}, [data])

	const editUser = async (event: React.FormEvent) => {
		event.preventDefault()

		const formData = new FormData()
		formData.append('FirstName', firstName)
		formData.append('LastName', lastName)
		formData.append('Email', email)
		formData.append('PhoneNumber', phone)
		formData.append('Dob', dob)
		if (imageS) {
			formData.append('image', imageS)
		}

		try {
			await editUserProfile(formData).unwrap()
			refetch()
		} catch (error) {
			console.error(error)
		}
	}

	if (isLoading) {
		return <Loading/>
	}

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
							`https://store-api.softclub.tj/images/${data?.data?.image}` ||
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s'
						}
						alt='Profile Image'
						className='w-[70px] h-[70px] rounded-full border'
					/>
					<input
						type='file'
						onChange={e => setImageS(e.target.files?.[0] || null)}
					/>
				</div>

				<form onSubmit={editUser} className='space-y-6'>
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
