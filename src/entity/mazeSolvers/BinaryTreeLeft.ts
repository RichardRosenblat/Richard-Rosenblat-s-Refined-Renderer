import { IMazeSolver } from "../../types/IFilterLibrary";
import { ImageMatrix, Pixel } from "../../types/ImageMatrix";
import { copyImage } from "../../utils/imageUtils";

export class BinaryTreeLeft implements IMazeSolver {
	public solve(img: ImageMatrix): ImageMatrix {
		const copiedImage = copyImage(img);
		const { backgroundColor, wallColor } = this.getColors(copiedImage);

		return copiedImage;
	}

	private findSquares(img: ImageMatrix, backgroundColor: Pixel, wallColor: Pixel): ImageMatrix {
		return img;
	}

	private getColors(img: ImageMatrix): { backgroundColor: Pixel; wallColor: Pixel } {
		const backgroundColor = img[0][0];
		const wallColor = img.reduce((wallColor, row) => {
			const rowWallColor = row.find((pixel) => !this.areColorsEqual(pixel, backgroundColor));
			return rowWallColor ? rowWallColor : wallColor;
		}, backgroundColor);
		return { backgroundColor, wallColor };
	}
	private areColorsEqual(color1: Pixel, color2: Pixel) {
		return color1.every((c, i) => c === color2[i]);
	}
}
