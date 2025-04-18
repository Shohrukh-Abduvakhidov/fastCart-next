import { baseApi } from '@/shared/api/baseApi'

export const categoryApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getCategory: builder.query({
			query: () => '/Category/get-categories',
		}),
	}),
})
export const { useGetCategoryQuery } = categoryApi
