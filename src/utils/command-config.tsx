import mooVerbosity from './definitely-not-an-easter-egg';
import listAllCommands from './list-all-commands';
type CommandConfig = {
	[name: string]: (args: string[] | string) => string;
}
const commands: CommandConfig = {
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


}
const greet = (args: string[] | string) => {
	if(args.length < 1) return 'Hello, World!';
	return `Hello, ${args}!`;
}
const remove = (args: string[] | string) => {
	if(args.length < 1) return 'You need to specify a file to remove.';
	if (typeof args === 'string') args = [args]
	if (args.includes('-rf') && args.length === 1) {
		setTimeout(() => {
			hideUI();
		}, 1000);
		return 'Deleting everything...';
	}

	return `You just deleted ${args}. Good job!`;
}
const hideUI = () =>{
	document.getElementById('root')?.classList.add('hidden');
	setTimeout(() => {
		document.getElementById('root')?.classList.remove('hidden');
	}, 2000);
}

// export const availableCommands = [
// 	'clear',
// 	'help',
// 	'ls',
// 	'cd',
// 	'cat',
// 	'mkdir',
// 	'rmdir',
// 	'rm',
// 	'mv',
// 	'cp',
// 	'touch',
// 	'echo',
// 	'pwd',
// 	'whoami',
// 	'date',
// 	'history',
// 	'exit',
// ];
export default commands;