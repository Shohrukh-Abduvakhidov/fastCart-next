'use client'
import { useGetFilteredProductsQuery } from '@/entities/Products/api/productApi'
import { IProduct } from '@/entities/Products/model/productTypes'
import { ProductCard } from '@/entities/Products/ui/card'
import BrandFilter from '@/features/BrandFillter/ui/brandFillter'
import CategoriesFilter from '@/features/categoryAside/ui/categoriesFilter'
import { Button } from '@/shared/ui/button'
import Loading from '@/shared/ui/loading/loading'
import PriceRangeSlider from '@/shared/ui/priceRange/priceRange'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
export default function ProductListing() {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
	const [priceRange, setPriceRange] = useState<[number, number]>([1, 100000])
	const [changeBrand, setChangeBrand] = useState<number | null>(null)
	const [changeCategory, setChangeCategory] = useState<number | null>(null)
	const [pagination, setPagination] = useState<number>(1)
	const { data, isLoading, error } = useGetFilteredProductsQuery({
		MinPrice: priceRange[0],
		MaxPrice: priceRange[1],
		BrandId: changeBrand,
		CategoryId: changeCategory,
		PageNumber: pagination,
		PageSize: 10,
	})
	if (isLoading) return <Loading />
	if (error)
		return <p className='text-center text-red-500'>Error loading products</p>
	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='flex flex-col md:flex-row gap-6'>
				{/* Mobile Filter Button */}
				<div className='md:hidden flex justify-between items-center mb-4'>
					<h1 className='text-xl font-semibold'>Products</h1>
					<Button
						variant='outline'
						onClick={() => setMobileFiltersOpen(true)}
						className='flex items-center gap-2'
					>
						Filters <ChevronDown className='h-4 w-4' />
					</Button>
				</div>

				{/* Mobile Filters Sidebar */}
				{mobileFiltersOpen && (
					<div className='fixed inset-0 z-50 bg-white overflow-y-auto p-4'>
						<div className='flex justify-between items-center mb-6'>
							<h2 className='text-xl font-semibold'>Filters</h2>
							<Button
								variant='ghost'
								size='icon'
								onClick={() => setMobileFiltersOpen(false)}
							>
								<X className='h-6 w-6' />
							</Button>
						</div>
						<BrandFilter setChangeBrand={setChangeBrand} />
						<CategoriesFilter setChangeCategory={setChangeCategory} />
						<PriceRangeSlider
							min={0}
							max={1000000}
							value={priceRange}
							onChange={(val: number[]) => setPriceRange([val[0], val[1]])}
						/>
					</div>
				)}

				{/* Desktop Filters Sidebar */}
				<div className='hidden md:block w-64'>
					<CategoriesFilter setChangeCategory={setChangeCategory} />
					<BrandFilter setChangeBrand={setChangeBrand} />
					<PriceRangeSlider
						min={0}
						max={1000000}
						value={priceRange}
						onChange={val => setPriceRange([val[0], val[1]])}
					/>
				</div>

				<div className='flex-1'>
					<div className='flex justify-between items-center mb-6'>
						<h1 className='hidden md:block text-xl font-semibold'>Products</h1>
						<div className='flex items-center gap-2'>
							<span className='text-sm text-gray-500'>
								Showing {data?.data?.products?.length || 0} items
							</span>
							<Button variant='outline' className='flex items-center gap-2'>
								Popularity <ChevronDown className='h-4 w-4' />
							</Button>
						</div>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
						{data ? (
							data?.data?.products?.map((product: IProduct) => (
								<ProductCard
									key={product.id}
									id={String(product.id)}
									name={product.productName}
									price={product.price}
									discount={product.discountPrice}
									image={product.image}
									originalPrice={product.price}
									rating={3}
									reviewCount={200}
								/>
							))
						) : (
							<div className='flex items-center justify-center inset-0'>
								<h1 className='text-[black] text-[50px]'>NOT FOUND!</h1>
							</div>
						)}
					</div>

					<div className='mt-8 flex justify-center'>
						<Button
							onClick={() => setPagination(pagination + 1)}
							className='bg-red-500 hover:bg-red-600 text-white px-8'
						>
							More Products
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}