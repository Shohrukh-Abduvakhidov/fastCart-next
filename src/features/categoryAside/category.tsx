
import React from 'react'

const CategoryAside = () => {
	const categories = [
		{
			id : 1,
			name : "Womans fashions",
		},
		{
			id : 2,
			name : "Mans fashions",
		},
		{
			id : 3,
			name : "phones",
		},
		{
			id : 4,
			name : "Medicine",
		},
		{
			id : 5,
			name : "Sports",
		},
		{
			id : 6,
			name : "Groceries & Pets",
		},
		{
			id : 7,
			name : "Health & Beauty",
		},
	]
  return (
	 <ul className='lg:w-[20%] lg:border-r lg:gap-[0] gap-[30px] lg:border-[gray] flex lg:flex-col flex-wrap  text-[black] px-[10px] py-[10px]'>
		{
			categories.map((el) => (
				<li key={el.id} className='flex cursor-pointer py-[5px] justify-between items-center'>
					{el.name}
				</li>
			))
		}
	 </ul>
  )
}

export default CategoryAside
