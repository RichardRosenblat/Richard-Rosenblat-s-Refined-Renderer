/**
 * Interface for a filter
 * A filter is responsible for applying a transformation to an image.
 * It can be used to apply effects like blurring, sharpening, etc.
 * It defines a single method that takes an ImageData object and returns a new ImageData object.
 */
export interface IFilter {
    /**
     * Apply the filter to the image data.
     * @param imageData Image data to be filtered
     * @returns Filtered image data
     * */
    applyFilter(imageData: ImageData): ImageData;
}

/**
 * Interface for a filter library
 * A filter library is a collection of filters.
 * It maps filter names to filter objects.
 */
export interface IFilterLibrary {
	[filterName: string]: IFilter;
}
