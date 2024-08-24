import { Maze } from "./entity/Maze";

export async function main(args: string[]) {
	const fileName = args[0];
	const currentDirectory = process.cwd();
	Maze.create().loadImage(`${currentDirectory}/${fileName}`).solve().save("output.png");
}
