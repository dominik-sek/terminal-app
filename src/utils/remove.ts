export const remove = (args: string[] | string) => {
	if(args.length < 1) return 'You need to specify a file to remove.';
	if (typeof args === 'string') args = [args]
	if (args.includes('-rf') && args.length === 1 || args.includes('-rf') && args.includes('--no-preserve-root')){
		setTimeout(() => {
			hideUI();
		}, 1000);
		if(args.includes('--no-preserve-root')) return 'Oops!'
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
export default remove;