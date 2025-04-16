'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CountdownProps {
	targetDate: Date
	onComplete?: () => void
}

export function FlashSalesTimer({ targetDate, onComplete }: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true) 

		const update = () => {
			const updated = calculateTimeLeft(targetDate)
			setTimeLeft(updated)

			if (
				updated.seconds <= 0 &&
				updated.minutes <= 0 &&
				updated.hours <= 0 &&
				updated.days <= 0
			) {
				onComplete?.()
			}
		}

		update() 

		const timer = setInterval(update, 1000)

		return () => clearInterval(timer)
	}, [targetDate, onComplete])

	if (!isMounted) return null 

	return (
		<div className='flex w-[90%] lg:flex-row flex-col m-auto items-center justify-between'>
			<div className='flex items-center space-x-2'>
				<div className='relative'>
					<div className='absolute left-0 top-0 h-full w-1 bg-red-500'></div>
					<div className='pl-3 text-red-500 text-sm font-medium'>Today-s</div>
				</div>

				<h2 className='text-2xl font-bold ml-2'>Flash Sales</h2>

				<div className='flex items-end ml-8 space-x-1'>
					<TimerUnit label='Days' value={timeLeft.days} />
					<Colon />
					<TimerUnit label='Hours' value={timeLeft.hours} />
					<Colon />
					<TimerUnit label='Minutes' value={timeLeft.minutes} />
					<Colon />
					<TimerUnit label='Seconds' value={timeLeft.seconds} />
				</div>
			</div>

			<div className='flex space-x-2 mt-4 lg:mt-0'>
				<button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'>
					<ChevronLeft className='h-4 w-4' />
				</button>
				<button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'>
					<ChevronRight className='h-4 w-4' />
				</button>
			</div>
		</div>
	)
}

function TimerUnit({ label, value }: { label: string; value: number }) {
	return (
		<div className='flex flex-col items-center'>
			<span className='text-xl font-bold'>{padZero(value)}</span>
			<span className='text-xs text-gray-500'>{label}</span>
		</div>
	)
}

function Colon() {
	return <span className='text-xl font-bold mb-[0.3rem]'>:</span>
}

function calculateTimeLeft(targetDate: Date) {
	const difference = +targetDate - +new Date()
	let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		}
	}

	return timeLeft
}

function padZero(num: number): string {
	return num.toString().padStart(2, '0')
}
