import { IFilter, IFilterLibrary } from "../../types/IFilterLibrary";
import { GrayScaleFilter } from "../Filters/grayscale";

export class FilterLibraryV1 implements IFilterLibrary {
	[x: string]: IFilter;
	GrayScaleFilter: GrayScaleFilter = new GrayScaleFilter();
}
