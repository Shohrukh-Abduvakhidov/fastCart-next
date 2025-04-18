interface IProductInCart {
	categoryId : number 
	categoryName : string | null
	color : string
	discountPrice : number 
	hasDiscount : boolean
	id : number 
	image : string
	price : number 
	productInMyCart : boolean
	productInfoFromCart : null 
	productName : string
	quantity : number
}
export interface ICartProduct {
	id : number 
	product : IProductInCart
	quantity : number 
}