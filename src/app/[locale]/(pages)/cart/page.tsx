/* eslint-disable @next/next/no-img-element */
// Cart.jsx
import Link from 'next/link'
import React from 'react'

const Cart = () => {
	return (
		<div className='p-4 md:p-10'>
			{/* Cart Header */}
			<h1 className='text-xl font-semibold mb-6'>Cart</h1>

			{/* Cart Content */}
			<div className='flex flex-col md:flex-row md:justify-between gap-8'>
				{/* Left Side - Product List */}
				<div className='w-full md:w-2/3'>
					<div className='space-y-6'>
						{/* Item 1 */}
						<div className='flex items-center justify-between border p-4 rounded'>
							<div className='flex items-center gap-4'>
								<img
									src='https://via.placeholder.com/80'
									alt='LCD Monitor'
									className='w-16 h-16'
								/>
								<div>
									<p className='font-medium'>LCD Monitor</p>
									<p className='text-sm text-gray-500'>$650</p>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<input
									type='number'
									defaultValue={1}
									className='w-14 border rounded text-center'
								/>
								<p className='font-semibold'>$650</p>
							</div>
						</div>

						{/* Item 2 */}
						<div className='flex items-center justify-between border p-4 rounded'>
							<div className='flex items-center gap-4'>
								<img
									src='https://via.placeholder.com/80'
									alt='Gamepad'
									className='w-16 h-16'
								/>
								<div>
									<p className='font-medium'>H1 Gamepad</p>
									<p className='text-sm text-gray-500'>$550</p>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<input
									type='number'
									defaultValue={2}
									className='w-14 border rounded text-center'
								/>
								<p className='font-semibold'>$1100</p>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className='flex flex-col sm:flex-row justify-between mt-6 gap-4'>
						<button className='border border-black px-6 py-2 rounded'>
							Return To Shop
						</button>
						<div className='flex gap-2'>
							<button className='border border-black px-6 py-2 rounded'>
								Update Cart
							</button>
							<button className='border border-black px-6 py-2 rounded'>
								Remove all
							</button>
						</div>
					</div>

					{/* Coupon */}
					<div className='flex items-center mt-6 gap-2'>
						<input
							type='text'
							placeholder='Coupon Code'
							className='border px-4 py-2 w-full max-w-sm rounded'
						/>
						<button className='bg-red-500 text-white px-4 py-2 rounded'>
							Apply
						</button>
					</div>
				</div>

				{/* Right Side - Cart Total */}
				<div className='w-full md:w-1/3 border p-6 rounded space-y-4'>
					<h2 className='text-lg font-medium'>Cart Total</h2>
					<div className='flex justify-between'>
						<span>Subtotal:</span>
						<span>$1750</span>
					</div>
					<div className='flex justify-between'>
						<span>Shipping:</span>
						<span>Free</span>
					</div>
					<hr />
					<div className='flex justify-between font-bold text-lg'>
						<span>Total:</span>
						<span>$1750</span>
					</div>
					<button className='w-full bg-red-500 text-white py-3 mt-4 rounded'>
            <Link href={"/checkout"}>
						Proceed to checkout
            </Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
