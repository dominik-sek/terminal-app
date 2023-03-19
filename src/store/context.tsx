import React, {
	createContext,
	HTMLAttributes,
	useContext,
	useReducer,
} from 'react';
import terminalReducer, { initialState, TerminalState } from './reducer';
import { ActionTypes, TerminalActions } from './actions';
import { handleCommandExecution } from '../utils/handleCommandExecution';

const TerminalContext = createContext<{
	state: TerminalState;
	dispatch: React.Dispatch<TerminalActions>;
	addCommand: (command: string) => void;
}>({
	state: initialState,
	dispatch: () => null,
	addCommand: () => null,
});

type ITerminalProvider = HTMLAttributes<HTMLDivElement>;

export const TerminalProvider = ({
	children,
}: ITerminalProvider): JSX.Element => {
	const [state, dispatch] = useReducer(terminalReducer, initialState);

	const addCommand = (command: string) => {
		const commandArray = command.split(' ');
		const commandName = commandArray[0];
		const commandArgs = commandArray.slice(1);

		if (commandName === '') return;
		if (commandName === 'clear') {
			dispatch({ type: ActionTypes.ClearConsole });
			return;
		}

		const outcome = handleCommandExecution(commandName, commandArgs);
		dispatch({
			type: ActionTypes.AddCommand,
			payload: { name:command, outcome },
		});
	};

	const value = {
		state,
		dispatch,
		addCommand,
	};

	return (
		<TerminalContext.Provider value={value}>
			{children}
		</TerminalContext.Provider>
	);
};

export const useTerminal = () => {
	const context = useContext(TerminalContext);
	if (!context) {
		throw new Error('useTerminal must be used within a TerminalProvider');
	}
	return context;
};

export default useTerminal;
