import { baseApi } from '@/shared/api/baseApi'

export const cartApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getCartProducts: builder.query({
			query: () => '/Cart/get-products-from-cart',
		}),
		deleteProductInCart: builder.mutation({
			query: id => ({
				url: `/Cart/delete-product-from-cart?id=${id}`,
				method: 'DELETE',
			}),
		}),
		addProductInCart: builder.mutation({
			query: id => ({
				url: `/Cart/add-product-to-cart?id=${id}`,
				method: 'POST',
			}),
		}),
		clearCart: builder.mutation<void, void>({
			query: () => ({
				url: `/Cart/clear-cart`,
				method: 'DELETE',
			}),
		}),
		increaseProductInCart: builder.mutation({
			query: id => ({
				url: `/Cart/increase-product-in-cart?id=${id}`,
				method: 'PUT',
			}),
		}),
		reduceProductInCart: builder.mutation({
			query: id => ({
				url: `/Cart/reduce-product-in-cart?id=${id}`,
				method: 'PUT',
			}),
		}),
	}),
})
export const {
	useGetCartProductsQuery,
	useDeleteProductInCartMutation,
	useAddProductInCartMutation,
	useClearCartMutation,
	useIncreaseProductInCartMutation,
	useReduceProductInCartMutation,
} = cartApi
