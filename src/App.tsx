import React from 'react';
import TerminalWindow from './components/terminal-window/terminal-window';
import { TerminalProvider } from './store/context';

function App() {
	const date = new Date().toString().split(' ').slice(0, 5).join(' ');
	localStorage.setItem('entryDate', date);
	return (
		<div className="h-screen flex justify-center items-center bg-mountains bg-cover ">
			<TerminalProvider>
				<TerminalWindow />
			</TerminalProvider>
		</div>
	);
}
export default App;
