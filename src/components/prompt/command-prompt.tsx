import React from 'react';
import CommandInput from './command-input';
import useTerminal from '../../store/context';

export const CommandPrompt = () => {
	const { state } = useTerminal();

	return (
		<div
			className={
				'h-full overflow-auto m-2 text-white font-monaco text-sm flex flex-col'
			}>
			Last login: Tue Sep 7 17:00:00 on ttys000
			{state.commands.map((command, index) => {
				return <div key={index}>{command}</div>;
			})}
			<CommandInput />
		</div>
	);
};
export default CommandPrompt;
