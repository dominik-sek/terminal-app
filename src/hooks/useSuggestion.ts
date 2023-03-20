import { useState } from 'react';

export const useSuggestion = (suggestionArray: Array<string>) =>{

	const [suggestion, setSuggestion] = useState<string>('');
	const [fullCommand, setFullCommand] = useState<string>('');
	const getSuggestion = (input:string) => {
		input = input.toLowerCase()
		const matching = suggestionArray.filter(item => {
			return item.startsWith(input);
		});

		if (matching.length === 1) {
			const suggestion = matching[0];
			setFullCommand(suggestion);
			setSuggestion(suggestion.slice(input.length));

		} else {
			setSuggestion('');
		}
	}
	const reset = () => {
		setSuggestion('');
	}

	return {fullCommand, suggestion, getSuggestion, reset, };
}