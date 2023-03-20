import React from 'react';
import useTerminal from '../../store/context';
import { useSuggestion } from '../../hooks/useSuggestion';

export const CommandInput = () => {
	const { addCommand, state } = useTerminal();
	const { suggestion, getSuggestion, reset } = useSuggestion();

	let currentIndex = state.commands.length - 1;
	const min = 0;
	const max = state.commands.length - 1;

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		switch (e.key) {
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
			case 'Enter':
				if (suggestion) {
					e.currentTarget.value = suggestion;
				}
				addCommand(e.currentTarget.value.trim());
				e.currentTarget.value = '';
				reset();
				break;
			case 'Tab':
				e.preventDefault();
				if (suggestion) {
					e.currentTarget.value = suggestion;
				}
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
			<div className={'relative w-full'}>
				<input
					type="text"
					name={'command'}
					onKeyDown={(e) => {
						handleKeyPress(e);
					}}
					onChange={(e) => {
						getSuggestion(e.currentTarget.value);
					}}
					autoComplete={'off'}
					className={'w-full h-8 bg-transparent outline-none z-10'}
				/>
				{suggestion && (
					<input type={'text'} disabled value={suggestion} className={'absolute top-0 left-0 w-full h-8 bg-transparent outline-none text-white -z-10'} />
				)}
			</div>
		</div>
	);
};
export default CommandInput;
