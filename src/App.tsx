import React from 'react'
import TerminalWindow from './components/terminal-window/terminal-window';
import { TerminalProvider } from './store/context';

function App() {
  return (
    <div className="h-screen  flex justify-center items-center">
        <TerminalProvider>
            <TerminalWindow />
        </TerminalProvider>
    </div>
  );
}
export default App;