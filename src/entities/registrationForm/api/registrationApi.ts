import { baseApi } from '@/shared/api/baseApi'

export const registrationApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		PostRegistration: builder.mutation({
			query: body => ({
				url: `/Account/register`,
				method: 'POST',
				body: body,
			}),
		}),
	}),
})

export const {usePostRegistrationMutation} = registrationApi