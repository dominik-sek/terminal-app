const mooVerbosity = (args: string | string[]) => {
	if (typeof args === 'string') args = [args]
	const verbosity = args
		.map(arg => arg.slice(1))
		.reduce((acc, curr) => acc + curr.length, 0);
	console.log(verbosity)

	switch (verbosity) {
		case 0:
			return 'Nothing to see here.';
		case 1:
			return 'Go back to work.';
		case 2:
			return 'You\'re not fooling anyone.';
		case 3:
			return 'You\'re really trying, aren\'t you?';
		case 4:
			return 'You\'re really, really trying, aren\'t you?';
		case 5:
			return 'You\'re really, really, really trying, aren\'t you?';
		case 6:
			return 'This command is not that interesting.';
		case 7:
			return `
				   \\
					\\   ^__^
					 \\  (oo)\\_______
						(__)\\       )\\/\\
							||----w |
							||     ||
					Have you mooed today?`;
		case 42:
			return 'The answer to the ultimate question of life, the universe, and everything.';
		case 69:
			return 'Nice.';
		case 420:
			return 'Blaze it.';
		case 1337:
			return 'H4x0r.';
		case 9001:
			return 'It\'s over 9000! How did you even get this high?';
		default:
			return 'This program contains absolutely no Easter Eggs.';
	}
};
export default mooVerbosity;