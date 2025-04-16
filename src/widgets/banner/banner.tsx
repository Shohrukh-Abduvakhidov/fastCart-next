'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import jbl from '@/app/assets/Frame 694.png'

interface CountdownTimerProps {
	targetDate: Date
	onComplete?: () => void
}

export function PromoBanner({ targetDate, onComplete }: CountdownTimerProps) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)

		const updateTime = () => {
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

		updateTime() // первый вызов сразу
		const timer = setInterval(updateTime, 1000)

		return () => clearInterval(timer)
	}, [targetDate, onComplete])

	if (!isMounted) return null

	return (
		<div className='relative w-[95%] my-[50px] m-auto bg-black text-white rounded-lg overflow-hidden'>
			<div className='absolute top-6 left-6'>
				<span className='text-green-400 text-sm'>Categories</span>
			</div>

			<div className='flex w-[90%] m-auto flex-col md:flex-row items-center p-6 pt-12'>
				<div className='md:w-1/2 space-y-6 z-10'>
					<h2 className='text-3xl md:text-4xl font-bold leading-tight'>
						Enhance Your
						<br />
						Music Experience
					</h2>

					<div className='flex space-x-4 py-4'>
						<TimerUnit label='Days' value={timeLeft.days} />
						<TimerUnit label='Hours' value={timeLeft.hours} />
						<TimerUnit label='Minutes' value={timeLeft.minutes} />
						<TimerUnit label='Seconds' value={timeLeft.seconds} />
					</div>

					<Button className='bg-green-500 hover:bg-green-600 text-white rounded-md px-8 py-6 h-auto font-medium'>
						Buy Now!
					</Button>
				</div>

				<div className='md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end'>
					<Image
						src={jbl}
						alt='JBL Speaker'
						width={400}
						height={300}
						className='object-contain'
					/>
				</div>
			</div>
		</div>
	)
}

function TimerUnit({ label, value }: { label: string; value: number }) {
	return (
		<div className='flex flex-col items-center'>
			<div className='bg-white text-black rounded-full w-16 h-16 flex items-center justify-center'>
				<span className='font-bold'>{padZero(value)}</span>
			</div>
			<span className='text-xs mt-1 text-gray-300'>{label}</span>
		</div>
	)
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
