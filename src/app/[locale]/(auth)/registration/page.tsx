'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Separator } from '@/shared/ui/separator'

const SignupForm = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-white'>
			<div className='w-full max-w-md px-8 py-10 border border-gray-200 shadow-md rounded-md'>
				<h2 className='text-2xl font-semibold text-center text-black'>
					Create an account
				</h2>
				<p className='text-sm text-center text-gray-600 mt-1'>
					Enter your details below
				</p>

				<form className='mt-6 space-y-4'>
					<Input type='text' placeholder='Name' />
					<Input type='email' placeholder='Email or phone number' />
					<Input type='password' placeholder='Password' />
					<Button type='submit' className='w-full bg-[#DB4444] cursor-pointer'>
						Create Account
					</Button>
				</form>

				<div className='my-4'>
					<Separator className='mb-2' />
					<p className='text-center text-sm text-gray-500'>or</p>
					<Separator className='mt-2' />
				</div>

				<Button variant='outline' className='w-full gap-2'>
					<img
						src='https://www.svgrepo.com/show/475656/google-color.svg'
						alt='Google'
						className='w-5 h-5'
					/>
					<span>Sign up with Google</span>
				</Button>

				<p className='mt-6 text-sm text-center text-gray-700'>
					Already have account?{' '}
					<a href='#' className='text-black underline'>
						Log in
					</a>
				</p>
			</div>
		</div>
	)
}

export default SignupForm
