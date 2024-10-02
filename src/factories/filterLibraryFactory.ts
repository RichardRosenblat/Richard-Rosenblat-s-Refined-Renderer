import { FilterLibraryV1 } from "../entity/FilterLibraries/LibraryV1";
import { FilterLibrariesEnum } from "../enums/filterLibraries";

/**
 * Factory function to get the filter library based on the version
 * @param library Filter library version
 * @returns Filter library object
 * */
export function getFilterLibrary(library:FilterLibrariesEnum) {
    switch (library) {
        case FilterLibrariesEnum.V1:
            return FilterLibraryV1;
        default:
            throw new Error("Invalid filter library");
    }
}