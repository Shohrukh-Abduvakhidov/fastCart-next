export interface IDataBrand {
	id : number
	brandName : string
}

export interface IBrand{
	pageNumber : number 
	pageSize : number
	totalPage : number
	totalRecord : number
	data : IDataBrand[]
	statusCode : number
	errors : []
}