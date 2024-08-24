import { ImageMatrix } from "./ImageMatrix";

/**
 * Interface for image parsers.
 * An image parser is responsible for reading and writing images.
 * It can parse an image file into a matrix of pixels and save a matrix of pixels into an image file.
*/
export interface IImageParser {
	parse(fileName: string): ImageMatrix;
	save(fileName: string, image: ImageMatrix): void;
}
