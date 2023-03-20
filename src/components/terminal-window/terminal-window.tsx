import NavigationBar from './navigation-bar';
import React from 'react';
import CommandPrompt from '../prompt/command-prompt';

export const TerminalWindow = () => {
	return (
		<div className={'w-3/4 h-3/5 bg-window rounded-md flex flex-col' +
			' bg-opacity-70 backdrop-blur-sm shadow-md border-slate-600'}>
			<NavigationBar />
			<CommandPrompt />
		</div>
	);
};
export default TerminalWindow;
