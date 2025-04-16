import React from 'react'
import { Input } from '@/shared/ui/input'

const AccountProfile = () => {
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col md:flex-row'>
			{/* Sidebar (Desktop only) */}
			<aside className='hidden md:block w-64 bg-white p-6 border-r'>
				<h2 className='text-xl font-semibold mb-4'>Manage My Account</h2>
				<ul className='space-y-2'>
					<li className='text-red-500 font-semibold'>My Profile</li>
					<li className='text-gray-600'>Address Book</li>
					<li className='text-gray-600'>My Payment Options</li>
				</ul>

				<h2 className='text-xl font-semibold mt-8 mb-4'>My Orders</h2>
				<ul className='space-y-2'>
					<li className='text-gray-600'>My Returns</li>
					<li className='text-gray-600'>My Cancellations</li>
				</ul>

				<h2 className='text-xl font-semibold mt-8 mb-4'>My Wishlist</h2>
			</aside>

			{/* Main Content */}
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
		</div>
	)
}

export default AccountProfile
