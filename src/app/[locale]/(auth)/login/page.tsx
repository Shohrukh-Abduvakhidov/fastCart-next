'use client'
import LoginForm from '@/entities/loginForm/ui/loginForm'
import { useTranslations } from 'next-intl'

const LoginPage = () => {
	const t = useTranslations('login')
	return (
		<div className='flex items-center justify-center min-h-screen bg-white'>
			<div className='w-full max-w-md px-8 py-10 border border-gray-200 shadow-md rounded-md'>
				<h2 className='text-2xl font-semibold text-center text-black'>
					{t('header')}
				</h2>
				<p className='text-sm text-center text-gray-600 mt-1'>{t('header2')}</p>
				<LoginForm />
			</div>
		</div>
	)
}

export default LoginPage
