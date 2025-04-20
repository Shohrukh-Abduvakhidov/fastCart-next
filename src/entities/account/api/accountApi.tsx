import { baseApi } from '@/shared/api/baseApi'

export const AccountApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getProfileById: builder.query({
			query: id => `/UserProfile/get-user-profile-by-id?id=${id}`,
		}),
		editUserProfile: builder.mutation({
			query: body => ({
				url: '/UserProfile/update-user-profile',
				method: 'PUT',
				body: body,
			}),
		}),
	}),
})
export const { useGetProfileByIdQuery, useEditUserProfileMutation } = AccountApi
