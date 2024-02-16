
import { runner } from "./agent";

// index.ts

// Check if at least one command line argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node index.ts <your_argument>');
  process.exit(1);
}

// Access the command line argument
const userArgument: string = process.argv[2];

// Your logic using the received argument
console.log(`You provided the argument: ${userArgument}`);

const result = await runner.generate(userArgument)
  
console.log(result);