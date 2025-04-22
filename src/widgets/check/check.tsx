'use client'

import { Dialog, DialogContent, DialogTitle } from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Separator } from '@/shared/ui/separator'
import { Check, Download, Printer, QrCode } from 'lucide-react'
import { IProduct } from '@/entities/Products/model/productTypes'
import Image from 'next/image'
import logo from '@/app/assets/logo.png'
import { useRef } from 'react'

interface ReceiptModalProps {
	open: boolean
	setOpen: (open: boolean) => void
	products: IProduct
}

export function ReceiptModal({ open, setOpen, products }: ReceiptModalProps) {
	const receiptRef = useRef<HTMLDivElement>(null)

	// const handleDownloadPDF = async () => {
	// 	if (receiptRef.current) {
	// 		const html2pdfModule = await import('html2pdf.js')
	// 		const html2pdf = html2pdfModule.default || html2pdfModule

	// 		html2pdf()
	// 			.set({
	// 				margin: 0.5,
	// 				filename: 'receipt.pdf',
	// 				image: { type: 'jpeg', quality: 0.98 },
	// 				html2canvas: { scale: 2 },
	// 				jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
	// 			})
	// 			.from(receiptRef.current)
	// 			.save()
	// 	}
	// }

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className='sm:max-w-[500px] p-0 bg-white'>
				<div
					style={{ scrollbarWidth: 'none' }}
					ref={receiptRef}
					className='p-6 max-h-[100vh] overflow-y-auto'
				>
					{/* Header */}
					<div className='flex pt-[50px] flex-col items-center mb-6'>
						<Image src={logo} alt='logo' />
						<DialogTitle>{'Fast Cart'}</DialogTitle>
						<p className='text-sm text-gray-500'>
							Ваш надежный интернет-магазин
						</p>
					</div>

					{/* Order Info */}
					<div className='bg-gray-50 p-4 rounded-lg mb-6'>
						<div className='flex justify-between mb-2'>
							<span className='text-sm font-medium text-gray-500'>
								Номер заказа:
							</span>
							<span className='text-sm font-medium'>{'345687'}</span>
						</div>
						<div className='flex justify-between'>
							<span className='text-sm font-medium text-gray-500'>Дата:</span>
							<span className='text-sm font-medium'>18-01-2025</span>
						</div>
					</div>

					{/* Products */}
					<div className='mb-6'>
						<h3 className='font-medium text-gray-800 mb-3'>Товары</h3>
						<div className='space-y-3'>
							{products?.productsInCart?.map((product: IProduct) => (
								<div key={product.id} className='flex justify-between'>
									<div className='flex-1'>
										<p className='font-medium text-gray-800'>
											{product?.product?.productName}
										</p>
										<p className='text-sm text-gray-500 line-through'>
											{+product.product.price * +product.quantity}$
										</p>
									</div>
									<p className='font-medium text-gray-800 ml-4'>
										{+product.product.discountPrice * +product.quantity}$
									</p>
								</div>
							))}
						</div>
					</div>

					<Separator className='my-4' />

					{/* Totals */}
					<div className='space-y-2 mb-6'>
						<div className='flex justify-between'>
							<span className='text-gray-500'>Подытог:</span>
							<span></span>
						</div>
						<div className='flex justify-between'>
							<span className='text-gray-500'>НДС (20%):</span>
							<span></span>
						</div>
						<div className='flex justify-between'>
							<span className='text-gray-500'>Доставка:</span>
							<span></span>
						</div>
						<Separator className='my-2' />
						<div className='flex justify-between font-bold text-lg'>
							<span>Итого:</span>
							<span>{products.totalDiscountPrice}$</span>
						</div>
					</div>

					{/* Payment Method */}
					<div className='bg-gray-50 p-4 rounded-lg mb-6'>
						<div className='flex justify-between'>
							<span className='text-sm font-medium text-gray-500'>
								Способ оплаты:
							</span>
							<span className='text-sm font-medium'>Карта</span>
						</div>
					</div>

					{/* Status */}
					<div className='flex items-center justify-center p-3 bg-green-50 rounded-lg mb-6'>
						<Check className='h-5 w-5 text-green-500 mr-2' />
						<span className='text-green-700 font-medium'>
							Оплата прошла успешно
						</span>
					</div>

					{/* QR Code */}
					<div className='flex flex-col items-center '>
						<QrCode size={100} />
						<p className='text-xs text-gray-500'>Отсканируйте для проверки</p>
					</div>

					{/* Thank You */}
					<div className='text-center mb-4'>
						<p className='font-medium text-gray-800'>Спасибо за покупку!</p>
						<p className='text-sm text-gray-500'>Приходите к нам снова</p>
					</div>
				</div>

				{/* Actions */}
				<div className='flex justify-center pb-[60px] gap-2 border-t'>
					<Button variant='outline' size='sm' className='gap-1'>
						<Printer className='h-4 w-4' />
						<span>Печать</span>
					</Button>
					<Button variant='outline' size='sm' className='gap-1 cursor-pointer'>
						<Download className='h-4 w-4' />
						<span>Скачать PDF</span>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
