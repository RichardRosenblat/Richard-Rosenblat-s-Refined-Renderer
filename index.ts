import { main } from "./src/main";
const [, , ...commandLineArguments] = process.argv;

main(commandLineArguments);
