export interface ISubCategory {
	id : number 
	subCategoryName : string
}

export interface ICategory {
	id : number 
	categoryName : string
	categoryImage : string
	subCategory : ISubCategory[]
}