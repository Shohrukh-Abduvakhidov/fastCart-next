import { baseApi } from '@/shared/api/baseApi'
export const productApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getProducts: builder.query({
			query: () => '/Product/get-products',
		}),
		getProductById : builder.query({
			query : (id) => `Product/get-product-by-id?id=${id}`
		})
	}),
})

export const {useGetProductsQuery , useGetProductByIdQuery} = productApi