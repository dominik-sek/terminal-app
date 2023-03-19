import React from 'react'
import Button from './button';
export const NavigationBar = () => {
	return(
		<div className={'bg-navbar rounded-t-md w-full h-7 px-2'}>
			<div className={'h-full flex items-center gap-1'}>
				<Button type={'close'} />
				<Button type={'minimize'} />
				<Button type={'maximize'} />
			</div>
		</div>
	)
}
export default NavigationBar