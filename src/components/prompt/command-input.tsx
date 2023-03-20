import React from 'react';
import useTerminal from '../../store/context';

export const CommandInput = () => {
	const { addCommand, state } = useTerminal();
	let currentIndex = state.commands.length - 1;
	const min = 0;
	const max = state.commands.length - 1;

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		switch(e.key){
			case 'ArrowUp':
				e.preventDefault();
				if (currentIndex === -1) return;
				e.currentTarget.value = state.commands[currentIndex]?.name;
				currentIndex > min ? currentIndex-- : currentIndex;
				break;

			case 'ArrowDown':
				e.preventDefault();
				if (currentIndex === -1) return;
				e.currentTarget.value = state.commands[currentIndex]?.name;
				currentIndex < max ? currentIndex++ : currentIndex;
				break;

			case 'Tab':
				e.preventDefault();
				//TODO: Add tab completion
				break;

			case 'Enter':
				addCommand(e.currentTarget.value.trim());
				e.currentTarget.value = '';
				break;
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
