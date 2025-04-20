import { Input } from '@/shared/ui/input'
import React from 'react'

const Account = () => {
	return (
		<>
			<main className='flex-1 p-6 flex flex-col items-center'>
				<div className='w-full max-w-2xl bg-white shadow p-6 rounded-lg'>
					<h2 className='text-xl font-semibold text-red-500 mb-4'>Profile</h2>
					<form className='space-y-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<Input type='text' placeholder='First name' defaultValue='Md' />
							<Input type='text' placeholder='Last name' defaultValue='Rimel' />
							<Input
								type='email'
								placeholder='Email address'
								defaultValue='rimel1111@gmail.com'
							/>
							<Input
								type='text'
								placeholder='Street address'
								defaultValue='Kingston, 5326, United State'
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
		</>
	)
}

export default Account
