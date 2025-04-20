import React from 'react'
import { useGetBrandsQuery } from '../api/brandApi'
import { IDataBrand } from '../model/types'

const BrandFillter = ({
	setChangeBrand,
}: {
	setChangeBrand: (value: number | null) => void
}) => {
	const { data } = useGetBrandsQuery(undefined)
	return (
		<div>
			<div className='mt-[20px]'>
				<h3 className='text-lg font-medium mb-3'>Brands</h3>
				<div className='space-y-2 overflow-y-auto h-[150px]'>
					{data?.data?.map((brand: IDataBrand) => (
						<div key={brand.id} className='flex items-center justify-between'>
							<div className='flex items-center'>
								<input
									onChange={() => setChangeBrand(brand.id)}
									type='radio'
									name='choise'
									id=''
									className='cursor-pointer'
								/>
								<label htmlFor={`brand-${brand.id}`} className='ml-2 text-sm'>
									{brand.brandName}
								</label>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default BrandFillter
