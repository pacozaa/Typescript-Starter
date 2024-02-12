import type { Ollama } from "@langchain/community/llms/ollama";

export class GenerativeAIService {
    constructor(
        private ollamaClient: Ollama
    ) { }

    async generate(query: string) {
        const stream = await this.ollamaClient.stream(query);

        const chunks = [];

        for await (const chunk of stream) {
            chunks.push(chunk);
        }

        return chunks.join("");
    }

}
