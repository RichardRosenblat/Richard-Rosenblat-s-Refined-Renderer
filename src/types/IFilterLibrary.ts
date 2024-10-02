import { ImageMatrix } from "./ImageMatrix";

/**
 * Interface for a filter
 * A filter is responsible for applying a transformation to an image.
 * It can be used to apply effects like blurring, sharpening, etc.
 * It defines a single method that takes an image matrix and returns a filtered image matrix.
 */
export interface IFilter {
	/**
	 * Apply the filter to the image matrix
	 * @param imageMatrix Image matrix to be filtered
	 * @returns Filtered image matrix
	 * */
	applyFilter(imageMatrix: ImageMatrix): ImageMatrix;
}

/**
 * Type alias for a filter library
 * A filter library is a collection of filters.
 * It maps filter names to filter objects.
 */
export type IFilterLibrary  = Record<string, IFilter>;
