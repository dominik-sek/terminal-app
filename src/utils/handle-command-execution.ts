import commands from './command-config';

export const handleCommandExecution = (command: string, args: string[] | string): string =>{
	const commandFn = commands[command];
	if (commandFn) {
		return commandFn(args);
	}else{
		return `command not found: ${command}`
	}
}

export default handleCommandExecution;