import { getOllamaStream } from "../llm/index.js";
import { getRunnerPrompt } from "../prompt/index.js";
import { GenerativeTextInterface } from "../types/index.js";



export const runner: GenerativeTextInterface = {
  async generate(input: string) {
    const query =  await getRunnerPrompt(input);
    return await getOllamaStream(query)
  }
};