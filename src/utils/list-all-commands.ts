import commands from './command-config';

export const listAllCommands = () => {
	let commandList = `Here are all the commands you can use:\n`;
	Object.keys(commands).forEach((command) => {
		if(command === 'moo' || command === 'moo!') return;
		commandList += `- ${command}\n`
	});
	commandList +=
		`For more information on a specific command, type 'help <command>'
You can also navigate through the commands you've used by using the up and down arrow keys.`;

	return commandList;
}
export default listAllCommands;