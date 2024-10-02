import { IFilter } from "../../types/IFilterLibrary";
import { ImageMatrix } from "../../types/ImageMatrix";

/**
 * A filter that converts an image to grayscale.
 */
export class GrayScaleFilter implements IFilter {
    /**
     * Apply the grayscale filter to the image matrix
     * @param imageMatrix Image matrix to be filtered
     * @returns Filtered image matrix
     * */
    applyFilter(imageMatrix: ImageMatrix): ImageMatrix {
        return imageMatrix.map(row =>
            row.map(([r, g, b, a]) => {
                const avg = (0.299 * r) + (0.587 * g) + (0.114 * b)
                return [avg, avg, avg, a];
            })
        );
    }
}