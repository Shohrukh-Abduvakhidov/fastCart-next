import { cookies } from 'next/headers'
import { usePostLoginMutation } from './loginApi'

export async function POST(req: Request) {
	const [postLogin] = usePostLoginMutation()
	const body = await req.json()

	const response = await postLogin(body).unwrap()

	if (!response.ok) {
		return new Response('Login failed', { status: 401 })
	}

	const data = await response.json()

	const token = data?.data 

	if (!token) {
		return new Response('Token not found', { status: 401 })
	}

	(await cookies()).set('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
	})

	return new Response('Logged in', { status: 200 })
}
