import { Command } from './reducer';

export enum ActionTypes {
	AddCommand,
	ClearConsole,
}

export interface AddCommand {
	type: ActionTypes.AddCommand;
	payload: Command;
}
export interface ClearConsole {
	type: ActionTypes.ClearConsole;
}


export type TerminalActions = AddCommand | ClearConsole;
