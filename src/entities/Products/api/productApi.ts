import { baseApi } from '@/shared/api/baseApi'

type ProductParams = {
	UserId?: number
	ProductName?: string
	MinPrice?: number
	MaxPrice?: number
	BrandId?: number | null
	ColorId?: number
	CategoryId?: number | null
	SubcategoryId?: number
	PageNumber?: number
	PageSize?: number
}

export const productApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getProducts: builder.query({
			query: () => '/Product/get-products',
		}),

		getProductById: builder.query({
			query: (id: number) => `/Product/get-product-by-id?id=${id}`,
		}),
		getFilteredProducts: builder.query({
			query: (params: ProductParams) => {
				const searchParams = new URLSearchParams()
				for (const [key, value] of Object.entries(params)) {
					if (value !== undefined && value !== null) {
						searchParams.append(key, String(value))
					}
				}

				return `/Product/get-products?${searchParams.toString()}`
			},
		}),
	}),
})

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useGetFilteredProductsQuery,
} = productApi
