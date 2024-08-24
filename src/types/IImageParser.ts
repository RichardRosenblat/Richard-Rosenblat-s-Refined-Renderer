import { Image } from "./image";

export interface IImageParser {
	parse(fileName: string): Image;
	save(fileName: string, image: Image): void;
}
