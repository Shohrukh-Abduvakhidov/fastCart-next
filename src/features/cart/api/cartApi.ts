import { baseApi } from '@/shared/api/baseApi'

export const cartApi = baseApi.injectEndpoints({
	endpoints : builder => ({
		getCartProducts : builder.query({
			query : () => "/Cart/get-products-from-cart"
		}),
		deleteProductInCart : builder.mutation({
			query : (id) => ({
				url : `/Cart/delete-product-from-cart?id=${id}`,
				method : "DELETE"
			})
		}),
		addProductInCart : builder.mutation({
			query : (id) => ({
				url : `/Cart/add-product-to-cart?id=${id}`,
				method : "POST"
			})
		})
	})
})
export const {useGetCartProductsQuery , useDeleteProductInCartMutation , useAddProductInCartMutation} = cartApi