import { FilterLibrariesEnum } from "../enums/filterLibraries";
import { ImageParsersEnum } from "../enums/imageFormats";
import { getFilterLibrary } from "../factories/filterLibraryFactory";
import { getImageParser } from "../factories/imageParserFactory";
import { IFilterLibrary } from "../types/IFilterLibrary";
import { IImageParser } from "../types/IImageParser";
import { ImageMatrix } from "../types/ImageMatrix";

/**
 * Class representing an image renderer that can load, process and save images.
 * An image is a 2D matrix of pixels.
 * It can be loaded from a file, processed using filters and saved back to a file.
 * */
export class RefinedRenderer {
	private filters: IFilterLibrary;
	private parser: IImageParser;
	private image?: ImageMatrix;
	private filteredImage?: ImageMatrix;
	private fileName?: string;

	/**
	 * Create an image object
	 * @param parser Image parser object
	 * @param filters Filter library object
	 * */
	constructor(parser: IImageParser, filters: IFilterLibrary) {
		this.parser = parser;
		this.filters = filters;
	}

	/**
	 * Get the original image matrix
	 * */
	get originalImage(): ImageMatrix | undefined {
		return this.image;
	}

	/**
	 * Get the processed image matrix
	 * */
	get processedImage(): ImageMatrix | undefined {
		return this.filteredImage;
	}

	/**
	 * Get the current file name
	 * */
	get currentFileName(): string | undefined {
		return this.fileName;
	}

	/**
	 * Get the available filters
	 * */
	get availableFilters(): string[] {
		return Object.keys(this.filters);
	}

	/**
	 * Get the available filter libraries
	 * */
	static get availableFilterLibraries(): string[] {
		return Object.keys(FilterLibrariesEnum);
	}

	/**
	 * Get the available image parsers
	 * */
	static get availableImageParsers(): string[] {
		return Object.keys(ImageParsersEnum);
	}

	/**
	 * Create an image object
	 * @param forFormat Image format
	 * @param method Filter library version
	 * @returns Image object
	 * */
	public static create(forFormat?: ImageParsersEnum, method?: FilterLibrariesEnum): RefinedRenderer {
		const parser = getImageParser(forFormat || ImageParsersEnum.PNG_JS);
		const filters = getFilterLibrary(method || FilterLibrariesEnum["V1"]);
		return new RefinedRenderer(parser, filters);
	}

	/**
	 * Load an image from a file
	 * @param fileName File name
	 * @returns Image object
	 * */
	public loadImage(fileName: string): RefinedRenderer {
		this.fileName = fileName;
		this.image = this.parser.parse(fileName);
		return this;
	}

	/**
	 * Apply a filter to the image
	 * @param filterName Filter name
	 * @returns Image
	 * */
	public applyFilter(filterName: string): RefinedRenderer {
		if (!this.image) throw new Error("No image loaded");
		if (!this.filters[filterName]) throw new Error("Invalid filter name");
		this.filteredImage = this.filters[filterName].applyFilter(this.filteredImage || this.image);
		return this;
	}

	/**
	 * Save the image to a file
	 * @param fileName File name
	 * */
	public save(fileName: string | undefined = this.fileName): void {
		if (!fileName || !this.image) throw new Error("No image loaded");
		this.parser.save(fileName, this.filteredImage || this.image);
	}
}
