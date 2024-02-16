import { getOllamaStream } from "../llm";
import { getRunnerPrompt } from "../prompt";
import { GenerativeTextInterface } from "../types";



export const runner: GenerativeTextInterface = {
  async generate(input: string) {
    const query =  await getRunnerPrompt(input);
    return await getOllamaStream(query)
  }
};