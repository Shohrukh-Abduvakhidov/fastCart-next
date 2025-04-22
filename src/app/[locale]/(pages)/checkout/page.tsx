'use client'
import { IProduct } from '@/entities/Products/model/productTypes'
import { useGetCartProductsQuery } from '@/features/cart/api/cartApi'
import { Input } from '@/shared/ui/input'
import Loading from '@/shared/ui/loading/loading'
/* eslint-disable @next/next/no-img-element */
// Checkout.jsx
import { ReceiptModal } from '@/widgets/check/check'
import React, { useState } from 'react'

const Checkout = () => {
	const [open, setOpen] = useState<boolean>(false)
	const { data, error, isLoading } = useGetCartProductsQuery(undefined)
	if (isLoading) return <Loading />
	if (error) return <p>erorr loading products</p>
	console.log('====================================')
	console.log(data?.data[0].productsInCart)
	console.log('====================================')
	return (
		<div className='p-4 md:p-10'>
			<h1 className='text-xl font-semibold mb-6'>Billing Details</h1>
			<ReceiptModal open={open} products={data?.data[0]} setOpen={setOpen} />
			<div className='flex flex-col md:flex-row md:gap-10'>
				{/* Billing Form */}
				<div className='w-full md:w-1/2 space-y-4 bg-white shadow-md p-6 rounded'>
					<Input
						type='text'
						placeholder='First name'
						className='w-full border p-2 rounded'
					/>
					<Input
						type='text'
						placeholder='Last name'
						className='w-full border p-2 rounded'
					/>
					<Input
						type='text'
						placeholder='Street address'
						className='w-full border p-2 rounded'
					/>
					<Input
						type='text'
						placeholder='Apartment, floor, etc. (optional)'
						className='w-full border p-2 rounded'
					/>
					<Input
						type='text'
						placeholder='Town/City'
						className='w-full border p-2 rounded'
					/>
					<Input
						type='text'
						placeholder='Phone number'
						className='w-full border p-2 rounded'
					/>
					<Input
						type='email'
						placeholder='Email address'
						className='w-full border p-2 rounded'
					/>

					<div className='flex items-center gap-2'>
						<Input type='checkbox' id='saveInfo' className='w-4 h-4' />
						<label htmlFor='saveInfo' className='text-sm'>
							Save this information for faster check-out next time
						</label>
					</div>
				</div>
				<div className='w-full md:w-1/2 mt-8 md:mt-0 space-y-6'>
					{/* Products */}
					<div className='space-y-4'>
						{data?.data[0]?.productsInCart.map((product: IProduct) => (
							<div
								className='flex justify-between gap-[30px] items-center'
								key={product.id}
							>
								<div className='flex gap-[20px] items-center'>
									<img
										src={`https://store-api.softclub.tj/images/${product?.product?.image}`}
										alt=''
										className='w-[50px] h-[50px]'
									/>
									<p className='font-bold'>{product?.product?.productName}</p>
								</div>
								<p className='font-bold'>
									{product?.product?.discountPrice * product.quantity}$
								</p>
							</div>
						))}
					</div>
					<div className='space-y-2'>
						<div className='flex justify-between'>
							<span>Subtotal:</span>
							<span>{data?.data[0].totalPrice}$</span>
						</div>
						<div className='flex justify-between'>
							<span>Shipping:</span>
							<span>Free</span>
						</div>
						<div className='flex justify-between font-bold text-lg'>
							<span>Total:</span>
							<span>{data?.data[0].totalDiscountPrice}$</span>
						</div>
					</div>

					{/* Payment Options */}
					<div className='space-y-2'>
						<div className='flex items-center gap-2'>
							<input
								type='radio'
								name='payment'
								id='bank'
								className='w-4 h-4'
							/>
							<label htmlFor='bank' className='text-sm'>
								Bank
							</label>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
								alt='Visa'
								className='h-4 ml-2'
							/>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png'
								alt='MasterCard'
								className='h-4 ml-2'
							/>
						</div>
						<div className='flex items-center gap-2'>
							<input
								type='radio'
								name='payment'
								id='cod'
								className='w-4 h-4'
								defaultChecked
							/>
							<label htmlFor='cod' className='text-sm'>
								Cash on delivery
							</label>
						</div>
					</div>

					{/* Coupon */}
					<div className='flex items-center gap-2'>
						<input
							type='text'
							placeholder='Coupon Code'
							className='border p-2 rounded w-full'
						/>
						<button className='bg-red-500 text-white px-4 py-2 rounded'>
							Apply
						</button>
					</div>

					{/* Place Order Button */}
					<button
						onClick={() => setOpen(true)}
						className='w-full bg-red-500 text-white py-3 rounded'
					>
						Place Order
					</button>
				</div>
			</div>
		</div>
	)
}

export default Checkout
