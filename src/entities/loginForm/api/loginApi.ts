import { baseApi } from '@/shared/api/baseApi'

export const loginApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		postLogin: builder.mutation({
			query: body => ({
				url: '/Account/login',
				method: 'POST',
				body: body,
			}),
		}),
	}),
})

export const { usePostLoginMutation } = loginApi
