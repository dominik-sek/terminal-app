export enum ActionTypes {
	AddCommand, ClearConsole
}

export interface AddCommand{
	type: ActionTypes.AddCommand;
	payload: string;
}
export interface ClearConsole{
	type: ActionTypes.ClearConsole;
}


export type TerminalActions = AddCommand | ClearConsole;