import { IFilter, IFilterLibrary } from "../../types/IFilterLibrary";
import { GrayScaleFilter } from "../Filters/grayscale";

/**
 * Filters library version 1
 * This library contains the following filters:
 * - GrayScaleFilter
 */
export class FilterLibraryV1 implements IFilterLibrary {
	[x: string]: IFilter;
	GrayScaleFilter: GrayScaleFilter = new GrayScaleFilter();
}
