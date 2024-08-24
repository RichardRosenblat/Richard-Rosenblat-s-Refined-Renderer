import { ImageMatrix } from "../types/ImageMatrix";

export function copyImage(image: ImageMatrix): ImageMatrix {
	return image.map((row) => row.map((pixel) => [...pixel]));
}
