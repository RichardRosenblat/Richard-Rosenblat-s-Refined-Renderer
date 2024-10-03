
export async function main(commandLineArgs: string[]) {
	const fileName = commandLineArgs[0];
	const currentDirectory = process.cwd();

	console.log('Current directory:', currentDirectory);
	console.log('File name:', fileName);

	// Maze.create().loadImage(`${currentDirectory}/${fileName}`).solve().save("output.png");

	

	console.log('Not implemented yet');
}
