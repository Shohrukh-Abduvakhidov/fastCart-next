'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Button } from './button'
import {
	useGetCartProductsQuery,
	useIncreaseProductInCartMutation,
	useReduceProductInCartMutation,
} from '@/features/cart/api/cartApi'

const Counter = ({ id, cnt }: { id: number; cnt: number }) => {
	const [increaseProductInCart] = useIncreaseProductInCartMutation()
	const [reduceProductInCart] = useReduceProductInCartMutation()
	const { refetch } = useGetCartProductsQuery(undefined)
	async function incriment() {
		try {
			await increaseProductInCart(id).unwrap()
			refetch()
		} catch (error) {
			console.error(error)
		}
	}
	async function decriment() {
		try {
			await reduceProductInCart(id).unwrap()
			refetch()
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<div className='flex items-center'>
			<Button onClick={decriment} className='cursor-pointer font-bold'>
				-
			</Button>
			<input
				value={cnt}
				type='number'
				name=''
				disabled
				className='w-[55px] ml-[10px] text-[black] text-center font-bold'
				id=''
			/>
			<Button onClick={incriment} className='cursor-pointer font-bold'>
				+
			</Button>
		</div>
	)
}
export default Counter
