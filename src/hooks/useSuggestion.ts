import { useState } from 'react';
import commands from '../utils/command-config';

export const useSuggestion = () =>{
	const availableCommands = Object.keys(commands);
	const [suggestion, setSuggestion] = useState<string>('');

	const getSuggestion = (input:string) => {
		const matchingCommands = availableCommands.filter(command => {
			return command.startsWith(input);
		});

		if (matchingCommands.length === 1) {
			setSuggestion(matchingCommands[0]);
		} else {
			setSuggestion('');
		}
	}
	const reset = () => {
		setSuggestion('');
	}

	return {suggestion, getSuggestion, reset};
}