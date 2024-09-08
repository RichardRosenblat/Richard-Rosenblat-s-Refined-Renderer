import { ImageMatrix } from "./ImageMatrix";

/**
 * Interface for image parsers.
 * An image parser is responsible for reading and writing images.
 * It can parse an image file into a matrix of pixels and save a matrix of pixels into an image file.
*/
export interface IImageParser {
	/**
	 * Parse an image file into a matrix of pixels.
	 * @param fileName Name of the file to be parsed
	 */
	parse(fileName: string): ImageMatrix;

	/**
	 * Save a matrix of pixels into an image file.
	 * @param fileName Name of the file to be saved
	 * @param image Matrix of pixels to be saved
	 */
	save(fileName: string, image: ImageMatrix): void;
}
