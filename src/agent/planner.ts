import { getOllamaStream } from "../llm/index.js";
import { getPlannerPrompt } from "../prompt/index.js";
import { GenerativeTextInterface } from "../types/index.js";

export const planner: GenerativeTextInterface = {
    async generate(input: string) {
        const query = await getPlannerPrompt(input);
        return await getOllamaStream(query)
    }
};