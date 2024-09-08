import { ImageMatrix } from "../types/ImageMatrix";

/**
 * Function to copy the image
 * @param image Image to be copied
 * @returns Copied image
 */
export function copyImage(image: ImageMatrix): ImageMatrix {
	return image.map((row) => row.map((pixel) => [...pixel]));
}
