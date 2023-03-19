import { ActionTypes, TerminalActions } from './actions';

export interface Command {
	name: string;
	outcome: string;
}
export interface TerminalState {
	commands: Command[] | [];
}
export const initialState: TerminalState = {
	commands: []
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
				commands: [],
			};
		default:
			return state;
	}
};
export default terminalReducer;
