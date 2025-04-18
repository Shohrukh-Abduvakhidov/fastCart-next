// src/shared/api/baseApi.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://store-api.softclub.tj',
		prepareHeaders: (headers) => {
			const access_token = localStorage.getItem("access_token")

			if (access_token) {
				headers.set('Authorization', `Bearer ${access_token}`)
			}
			return headers
		},
	}),
	endpoints: () => ({}), 
})
