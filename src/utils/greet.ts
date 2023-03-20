export const greet = (args: string[] | string) => {
	if(args.length < 1) return 'Hello, World!';
	return `Hello, ${args}!`;
}
export default greet;