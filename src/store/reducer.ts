import { ActionTypes, TerminalActions } from './actions';

export interface Command {
	command: string;
	outcome: string;
}
export interface TerminalState {
	commands: Command[];
	outcome: string;
}
export const initialState: TerminalState = {
	commands: [{} as Command],
	outcome: '',
};

export const terminalReducer = (
	state: TerminalState,
	action: TerminalActions,
) => {
	switch (action.type) {
		case ActionTypes.AddCommand:
			return {
				...state,
				commands: [...state.commands, action.payload],
			};
		case ActionTypes.ClearConsole:
			return {
				...state,
				commands: [{} as Command],
			};
		default:
			return state;
	}
};
export default terminalReducer;
