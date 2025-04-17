import { baseApi } from '@/shared/api/baseApi'
export const productApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getProducts: builder.query({
			query: () => '/Product/get-products',
		}),
	}),
})

export const {useGetProductsQuery} = productApi