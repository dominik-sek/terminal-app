import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
	type: 'close' | 'minimize' | 'maximize';
}

export const Button = (props: ButtonProps) =>{
	let color;
	switch(props.type){
		case 'close':
			color = 'bg-red-600 hover:bg-red-700';
			break;
		case 'minimize':
			color = 'bg-orange-600 hover:bg-orange-700';
			break;
		case 'maximize':
			color = 'bg-green-600 hover:bg-green-700';
			break;
	}
	return(
		<div className={clsx('rounded-full w-4 h-4  flex items-center justify-center', color)}>

		</div>
	)
}
export default Button;