import { IFilterLibrary } from "../../types/IFilterLibrary";
import { GrayScaleFilter } from "../Filters/grayscale";

/**
 * Filters library version 1
 * This library contains the following filters:
 * - GrayScaleFilter
 */
export const FilterLibraryV1: IFilterLibrary = {
	GrayScaleFilter: new GrayScaleFilter(),
}

