import React from 'react';
import useTerminal from '../../store/context';

export const CommandInput = () => {
	const { addCommand } = useTerminal();

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addCommand(e.currentTarget.value);
			e.currentTarget.value = '';
		}
	};

	return (
		<div className={'flex gap-2'}>
			<label
				htmlFor={'command'}
				className={'text-green-400 flex justify-center items-center'}>
				~$
			</label>
			<input
				type="text"
				name={'command'}
				onKeyDown={(e) => {
					handleKeyPress(e);
				}}
				autoComplete={'off'}
				className={'w-full h-8 bg-transparent outline-none'}
			/>
		</div>
	);
};
export default CommandInput;
