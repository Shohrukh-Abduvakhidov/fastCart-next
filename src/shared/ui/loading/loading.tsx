import React from 'react'
import "./style.css"
const Loading = () => {
	return (
		<div className='bg-white z-50 inset-0 fixed flex items-center justify-center'>
			<div className=''>
			<div className='loader'>
				<div data-glitch='Loading...' className='glitch'>
					Loading...
				</div>
			</div>
			</div>
		</div>
	)
}

export default Loading
