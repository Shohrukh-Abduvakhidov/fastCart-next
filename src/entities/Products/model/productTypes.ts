export interface IProduct {
	id: number | string
	productName: string
	image: string
	color: string
	price: number
	hasDiscount: boolean
	discountPrice: number
	quantity: number | string
	productInMyCart: boolean
	categoryId: number
	categoryName: string
	productInfoFromCart: null
}
export interface IProduct2 {
	id: number | string
	productName: string
	image: string
	color: string
	price: number
	hasDiscount: boolean
	discountPrice: number
	originalPrice: number
	quantity: number | string
	productInMyCart: boolean
	categoryId: number
	categoryName: string
	productInfoFromCart: null
	rating: number
	reviewCount: number
}

export type paramValue = number | undefined
