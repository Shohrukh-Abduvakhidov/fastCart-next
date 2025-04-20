import { baseApi } from '@/shared/api/baseApi'

export const AccountApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getProfileById: builder.query({
			query: id => `/UserProfile/get-user-profile-by-id?id=${id}`,
		}),
	}),
})
export const { useGetProfileByIdQuery } = AccountApi
