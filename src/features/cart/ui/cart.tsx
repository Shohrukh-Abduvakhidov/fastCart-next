'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import {
	useClearCartMutation,
	useDeleteProductInCartMutation,
	useGetCartProductsQuery,
} from '../api/cartApi'
import Loading from '@/shared/ui/loading/loading'
import { ICartProduct } from '../model/types'
import { Button } from '@/shared/ui/button'
import { X } from 'lucide-react'
import Counter from '@/shared/ui/counter'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const CartComponent = () => {
	const router = useRouter()
	const {
		data: productsCart,
		isLoading,
		error,
		refetch,
	} = useGetCartProductsQuery(undefined)
	const [deleteProductInCart] = useDeleteProductInCartMutation()
	const [clearCart] = useClearCartMutation()
	async function deleteProduct(id: number) {
		try {
			await deleteProductInCart(id).unwrap()
			refetch()
			toast.success('SuccesFuly delete product in cart!')
		} catch (error) {
			console.error(error)
		}
	}
	async function clearInCart() {
		try {
			await clearCart().unwrap()
			refetch()
			toast.success('SuccesFuly clear cart!')
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (error && (error as FetchBaseQueryError).status === 401) {
			router.push("/login")
		}
	}, [error,router])

	if (isLoading) return <Loading />
	if (error) return <p>error loading products in Cart</p>
	return (
		<div className='p-4 md:p-10'>
			<Toaster />
			<h1 className='text-xl font-semibold mb-6'>
				Cart{' '}
				<span className='text-black'>
					({productsCart?.data[0]?.totalProducts})
				</span>
			</h1>
			<div className='flex flex-col md:flex-row md:justify-between gap-8'>
				<div className='w-full md:w-2/3'>
					<div className='space-y-6'>
						{productsCart?.data[0]?.productsInCart?.map(
							(product: ICartProduct) => (
								<div
									key={product.id}
									className='flex items-center justify-between border p-4 rounded'
								>
									<div className='flex items-center gap-4'>
										<img
											src={`https://store-api.softclub.tj/images/${product?.product?.image}`}
											alt='Product Image'
											className='w-16 h-16'
										/>
										<div>
											<p className='font-medium'>
												{product?.product?.productName}
											</p>
											<p className='text-sm text-gray-500'>
												{product?.product?.discountPrice}$
											</p>
										</div>
									</div>
									<div className='flex lg:flex-row flex-col items-center gap-4'>
										<Counter id={product.id} cnt={product.quantity} />
										<div className='flex gap-[20px] items-center'>
											<p className='font-semibold'>
												{product?.product?.discountPrice * product.quantity}$
											</p>
											<Button
												onClick={() => deleteProduct(product.id)}
												className='bg-[red] p-1 rounded-full cursor-pointer'
											>
												<X className='text-[#fff] font-bold' size={20} />
											</Button>
										</div>
									</div>
								</div>
							)
						)}
					</div>

					<div className='flex flex-col sm:flex-row justify-between mt-6 gap-4'>
						<Link href={'/'}>
							<Button className='borde cursor-pointerr border-black px-6 py-2 rounded'>
								Return To Shop
							</Button>
						</Link>
						<div className='flex gap-2'>
							<Button
								onClick={() => refetch()}
								className='border cursor-pointer border-black px-6 py-2 rounded'
							>
								Update Cart
							</Button>
							<Button
								onClick={clearInCart}
								className='border cursor-pointer border-black px-6 py-2 rounded'
							>
								Remove all
							</Button>
						</div>
					</div>

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

				<div className='w-full md:w-1/3 border p-6 rounded space-y-4'>
					<h2 className='text-lg font-medium'>Cart Total</h2>
					<div className='flex justify-between'>
						<span>Subtotal:</span>
						<span>{productsCart.data[0].totalPrice}$</span>
					</div>
					<div className='flex justify-between'>
						<span>Shipping:</span>
						<span>Free</span>
					</div>
					<hr />
					<div className='flex justify-between font-bold text-lg'>
						<span>Total:</span>
						<span>{productsCart.data[0].totalDiscountPrice}$</span>
					</div>
					<Link href={'/checkout'}>
						<Button className='w-full cursor-pointer bg-red-500 text-white py-3 mt-4 rounded'>
							Proceed to checkout
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CartComponent
