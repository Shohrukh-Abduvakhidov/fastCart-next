import { baseApi } from '@/shared/api/baseApi'

export const BrandApi = baseApi.injectEndpoints({
	endpoints : builder =>({
		getBrands : builder.query({
			query : () => "/Brand/get-brands"
		})
	})
})
export const {useGetBrandsQuery} = BrandApi