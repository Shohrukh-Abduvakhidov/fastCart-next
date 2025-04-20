import React from 'react'

import { ICategory } from '../model/types'
import { useGetCategoryQuery } from '../api/categoryApi'
const CategoriesFilter = ({
	setChangeCategory,
}: {
	setChangeCategory: (value: number | null) => void
}) => {
	const { data } = useGetCategoryQuery(undefined)
	return (
		<div>
			<div>
				<h3 className='text-lg font-medium mb-3'>Category</h3>
				<div className='space-y-2 overflow-y-auto h-[150px]'>
					{data?.data?.map((category: ICategory) => (
						<div
							key={category.id}
							className='flex items-center cursor-pointer justify-between'
						>
							<div className='flex items-center'>
								<input
									onChange={() => setChangeCategory(category.id)}
									type='radio'
									name='choises'
									id=''
									className='cursor-pointer'
								/>
								<label
									htmlFor={`category-${category.id}`}
									className='ml-2 text-sm'
								>
									{category.categoryName}
								</label>
							</div>
							<span className='text-xs text-gray-500'>
								({category?.subCategories?.length})
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default CategoriesFilter
