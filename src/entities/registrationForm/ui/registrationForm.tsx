'use client'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { usePostRegistrationMutation } from '../api/registrationApi'
import { IUser } from '../model/types'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

const RegistrationForm = () => {
	const [postRegistation, { data }] = usePostRegistrationMutation()
	const [isPass, setIsPass] = useState<boolean>(false)
	const [isPass2, setIsPass2] = useState<boolean>(false)
	const [name, setName] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [pass, setPass] = useState<string>('')
	const [confPass, setConfPass] = useState<string>('')

	const t = useTranslations('registration')
	const router = useRouter()

	async function handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault()
		const newUser: IUser = {
			userName: name,
			phoneNumber: phone,
			email: email,
			password: pass,
			confirmPassword: confPass,
		}
		try {
			await postRegistation(newUser).unwrap()
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (data?.statusCode === 200) router.push('/login')
	}, [data?.statusCode, router])

	return (
		<form onSubmit={handleSubmit} className='mt-6 space-y-4'>
			<Input
				value={name}
				onChange={e => setName(e.target.value)}
				type='text'
				placeholder={t('name')}
			/>
			<Input
				value={phone}
				onChange={e => setPhone(e.target.value)}
				type='text'
				placeholder={t('phone')}
			/>
			<Input
				value={email}
				onChange={e => setEmail(e.target.value)}
				type='email'
				placeholder={t('email')}
			/>
			<div className='relative'>
				<Input
					value={pass}
					onChange={e => setPass(e.target.value)}
					type={isPass ? 'text' : 'password'}
					placeholder={t('password')}
				/>
				{isPass ? (
					<EyeOff
						onClick={() => setIsPass(!isPass)}
						className='absolute cursor-pointer top-2 right-2'
					/>
				) : (
					<Eye
						onClick={() => setIsPass(!isPass)}
						className='absolute cursor-pointer top-2 right-2'
					/>
				)}
			</div>
			<div className='relative'>
				<Input
					value={confPass}
					onChange={e => setConfPass(e.target.value)}
					type={isPass2 ? 'text' : 'password'}
					placeholder={t('confirmPassword')}
				/>
				{isPass2 ? (
					<EyeOff
						onClick={() => setIsPass2(!isPass2)}
						className='absolute cursor-pointer top-2 right-2'
					/>
				) : (
					<Eye
						onClick={() => setIsPass2(!isPass2)}
						className='absolute cursor-pointer top-2 right-2'
					/>
				)}
			</div>
			<Button type='submit' className='w-full bg-[#DB4444] cursor-pointer'>
				{t('createAccount')}
			</Button>
		</form>
	)
}

export default RegistrationForm
