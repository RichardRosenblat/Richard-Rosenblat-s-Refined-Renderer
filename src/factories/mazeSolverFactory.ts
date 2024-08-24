import { BinaryTreeLeft } from "../entity/mazeSolvers/BinaryTreeLeft";
import { SolverMethodsEnum } from "../enums/solverMethods";
import { IMazeSolver } from "../types/IFilterLibrary";

export function getMazeSolver(method: SolverMethodsEnum): IMazeSolver {
	switch (method) {
		case SolverMethodsEnum["BINARY-TREE-LEFT"]:
			return new BinaryTreeLeft();
		default:
			throw new Error("Invalid solver method");
	}
}
