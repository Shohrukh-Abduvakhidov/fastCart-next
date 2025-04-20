import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePostLoginMutation } from '../api/loginApi'
import { IUserLogin } from '../model/types'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
	const [postLogin, { data }] = usePostLoginMutation()
	const [isPass, setIsPass] = useState<boolean>(false)
	const [pass, setPass] = useState<string>('')
	const [name, setName] = useState<string>('')
	const router = useRouter()
	async function handleLogin(event: { preventDefault: () => void }) {
		event.preventDefault()
		const loginUser: IUserLogin = {
			userName: name,
			password: pass,
		}
		try {
			await postLogin(loginUser).unwrap()
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (data?.data) {
			localStorage.setItem('access_token', data?.data)
			router.push('/')
		}
	}, [data?.data, router])
	return (
		<>
			<form onSubmit={handleLogin} className='mt-6 py-[40px] space-y-4'>
				<Input
					value={name}
					onChange={e => setName(e.target.value)}
					type='text'
					placeholder='Name'
				/>
				<div className='relative'>
					<Input
						value={pass}
						onChange={e => setPass(e.target.value)}
						type={isPass ? 'text' : 'password'}
						placeholder='Password'
					/>
					{isPass ? (
						<EyeOff
							onClick={() => setIsPass(!isPass)}
							className='absolute cursor-pointer top-2 right-2'
						/>
					) : (
						<Eye
							onClick={() => setIsPass(!isPass)}
							className='absolute cursor-pointer top-2 right-2'
						/>
					)}
				</div>
				<Button
					typeof='submit'
					type='submit'
					className='w-full bg-[#DB4444] cursor-pointer'
				>
					Log In
				</Button>
			</form>
		</>
	)
}

export default LoginForm
