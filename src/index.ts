import { FewShotPromptTemplate } from "langchain/prompts.js";
import { GenerativeAIService } from "./model/index.js";
import { fewShotPrompt } from "./prompt/index.js";
import { ollama } from "./model/ollama.js";

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

const service = new GenerativeAIService(ollama);
const formattedPrompt = await fewShotPrompt.format({ commandInput: userArgument })

const result = await service.generate(
    // 
    formattedPrompt
  );
  
  console.log(result);