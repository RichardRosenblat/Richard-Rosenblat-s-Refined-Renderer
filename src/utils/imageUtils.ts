import { Image } from "../types/image";

export function copyImage(image: Image): Image {
	return image.map((row) => row.map((pixel) => [...pixel]));
}
