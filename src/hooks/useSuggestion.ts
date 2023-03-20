import { useState } from 'react';

export const useSuggestion = (suggestionArray: Array<string>) =>{

	const [suggestion, setSuggestion] = useState<string>('');

	const getSuggestion = (input:string) => {
		const matching = suggestionArray.filter(item => {
			return item.startsWith(input);
		});

		if (matching.length === 1) {
			setSuggestion(matching[0]);
		} else {
			setSuggestion('');
		}
	}
	const reset = () => {
		setSuggestion('');
	}

	return {suggestion, getSuggestion, reset};
}