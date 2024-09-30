import { IFilter } from "../../types/IFilterLibrary";

/**
 * A filter that converts an image to grayscale.
 */
export class GrayScaleFilter implements IFilter {
    /**
     * Apply the filter to the image data.
     * @param imageData Image data to be filtered
     * @returns Filtered image data
     * */
    applyFilter(imageData: ImageData): ImageData {
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg;
            data[i + 1] = avg;
            data[i + 2] = avg;
        }
        return imageData;
    }
}