import { ImageParsersEnum } from "../enums/imageFormats";
import { FilterLibrariesEnum } from "../enums/filterLibraries";
import { getImageParser } from "../factories/imageParserFactory";
import { getMazeSolver } from "../factories/mazeSolverFactory";
import { IImageParser } from "../types/IImageParser";
import { IMazeSolver } from "../types/IFilterLibrary";
import { ImageMatrix } from "../types/ImageMatrix";

export class Maze {
	private solver: IMazeSolver;
	private parser: IImageParser;
	private image?: ImageMatrix;
	private solvedImage?: ImageMatrix;
	private fileName?: string;

	constructor(reader: IImageParser, solver: IMazeSolver) {
		this.parser = reader;
		this.solver = solver;
	}

	public static create(forFormat?: ImageParsersEnum, method?: FilterLibrariesEnum): Maze {
		const reader = getImageParser(forFormat || ImageParsersEnum.PNG_JS);
		const solver = getMazeSolver(method || FilterLibrariesEnum["V1"]);
		return new Maze(reader, solver);
	}

	public loadImage(fileName: string): Maze {
		this.fileName = fileName;
		this.image = this.parser.parse(fileName);
		return this;
	}

	public solve(): Maze {
		if (!this.image) throw new Error("No image loaded");
		this.solvedImage = this.solver.solve(this.image);
		return this;
	}

	public save(fileName: string | undefined = this.fileName): void {
		if (!fileName || !this.image) throw new Error("No image loaded");
		this.parser.save(fileName, this.solvedImage || this.image);
	}
}
