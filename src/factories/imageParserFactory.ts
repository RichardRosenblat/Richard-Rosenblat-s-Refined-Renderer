import { PngJsParser } from "../entity/ImageParsers/PngImageParser";
import { ImageParsersEnum } from "../enums/imageFormats";
import { IImageParser } from "../types/IImageParser";

/**
 * Factory function to get the image parser based on the format
 * @param parser Image format
 */
export function getImageParser(parser: ImageParsersEnum): IImageParser {
	switch (parser) {
		case "PNG_JS":
			return new PngJsParser();
		default:
			throw new Error("Invalid image format");
	}
}
