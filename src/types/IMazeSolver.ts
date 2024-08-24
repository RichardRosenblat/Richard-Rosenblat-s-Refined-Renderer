import { Image } from "./image";

export interface IMazeSolver {
	solve(image: Image): Image;
}
