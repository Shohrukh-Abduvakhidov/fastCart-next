export interface IProduct{
	id : number | string
	productName : string
	image : string
	color : string
	price : number 
	hasDiscount : boolean
	discountPrice : number 
	quantity : number | string
	productInMyCart : boolean
	categoryId : number 
	categoryName : string
	productInfoFromCart : null
}