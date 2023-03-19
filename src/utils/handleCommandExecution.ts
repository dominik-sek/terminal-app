type CommandConfig = {
	[name: string]: (args: string[] | string) => string;
}
const commands: CommandConfig = {
	echo: (args: string[] | string) => { return args.toString();},
	whoami: () => "I'm a developer",
	greet: (args) => `Hello, ${args}!`,
	moo: () => `
	   \\
		\\   ^__^
		 \\  (oo)\\_______
			(__)\\       )\\/\\
				||----w |
				||     ||
			Have you mooed today?`,


}

export const handleCommandExecution = (command: string, args: string[] | string): string =>{
	const commandFn = commands[command];
	if (commandFn) {
		return commandFn(args);
	}else{
		return 'Command not found';
	}

}
