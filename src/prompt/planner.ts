import { PromptTemplate } from "@langchain/core/prompts";

const plannerPrompt = new PromptTemplate({
    inputVariables: ["input"],
    template: `
    <<SYS>>
    You are human wish to step by step list converter, 
    You explain step of action that user has to execute in back through Applescript osascript cli
    you always return json output
    <</SYS>>
    [INST] Wish: {input}[/INST]`,
});

export const getPlannerPrompt = async (input: string) => {
    return await plannerPrompt.format({ input })
}