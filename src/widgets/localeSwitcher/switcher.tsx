'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { ChangeEvent } from 'react'

const locales = [
	{ value: 'en', label: 'English' },
	{ value: 'ru', label: 'Русский' },
	{ value: 'tj', label: 'Тоҷикӣ' },
]

export default function LocaleSwitcher() {
	const router = useRouter()
	const pathname = usePathname()
	const currentLocale = useLocale()

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newLocale = e.target.value

		
		const segments = pathname.split('/')
		segments[1] = newLocale 
		const newPath = segments.join('/')

		router.push(newPath)
	}

	return (
		<select
			value={currentLocale}
			onChange={handleChange}
			className='border cursor-pointer rounded p-1'
		>
			{locales.map(({ value, label }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</select>
	)
}
