import { PngImageParser } from "../entity/ImageParsers/PngImageParser";
import { ImageFormatsEnum } from "../enums/imageFormats";
import { IImageParser } from "../types/IImageParser";

export function getImageParser(format: ImageFormatsEnum): IImageParser {
	switch (format) {
		case "PNG":
			return new PngImageParser();
		default:
			throw new Error("Invalid image format");
	}
}
