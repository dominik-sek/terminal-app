import mooVerbosity from './definitely-not-an-easter-egg';
import listAllCommands from './list-all-commands';
import greet from './greet';
import remove from './remove';
type CommandConfig = {
	[name: string]: (args: string[] | string) => string;
}
export const commands: CommandConfig = {
	echo: (args: string[] | string) => { return args.toString();},
	whoami: () => "I'm a developer",
	greet: (args) => greet(args),
	moo: (args) => mooVerbosity(args),
	'moo!': () => `
	   \\
		\\   ^__^
		 \\  (oo)\\_______
			(__)\\       )\\/\\
				||----w |
				||     ||
			Have you mooed today?`,
	ls: () => 'index.html\nstyle.css\nscript.js',
	help: () => listAllCommands(),
	rm: (args) => remove(args),
	hello: () => 'Hello World!',
	clear: () => '',
}

export default commands;