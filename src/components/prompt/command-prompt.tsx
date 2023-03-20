import React from 'react';
import CommandInput from './command-input';
import useTerminal from '../../store/context';

export const CommandPrompt = () => {
	const { state } = useTerminal();
	//date in the format of: Wed Jun 16 15:49:00 PDT 2021
	const entryDate = localStorage.getItem('entryDate');

	return (
		<div
			className={
				'h-full overflow-auto scrollbar-thin scrollbar-thumb-slate scrollbar-track-gray-600/30 ' +
				' m-2 text-white font-monaco text-sm flex flex-col scrollbar-rounded-lg'
			}>
			<span>Last login: {entryDate} on ttys000</span>
			{state.commands.map((command, index) => {
				return (
					<div key={index}>
						<div className={'text-green-400 whitespace-nowrap'}>~$ <span className={'text-white font-bold '}>{command.name}</span> </div>
						<code className={'whitespace-pre'}>{command.outcome}</code>
					</div>
				)
			})}
			<CommandInput />
		</div>
	);
};
export default CommandPrompt;
