import { ActionTypes, TerminalActions } from './actions';

export interface TerminalState {
	commands: string[];
}
export const initialState: TerminalState = {
	commands: [],
};

export const terminalReducer = (state: TerminalState, action: TerminalActions) => {
	switch (action.type) {
		case ActionTypes.AddCommand:
			return {
				...state,
				commands: [...state.commands, action.payload],
			}
		case ActionTypes.ClearConsole:
			return {
				...state,
				commands: [],
			}
		default:
			return state;
	}
};
export default terminalReducer;