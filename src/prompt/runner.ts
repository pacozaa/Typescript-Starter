import { PromptTemplate, FewShotPromptTemplate } from "@langchain/core/prompts";


const examplePrompt = new PromptTemplate({
  inputVariables: ["input", "output"],
  template: `
  [INST] Wish: {input}[/INST]
  Code: {output}`,
});
const examples = [
  {
    input: "Open Safari",
    output: `
    tell application "Safari" to activate
    `,
  },
  {
    input: "Set volume to 50%",
    output: `
    set volume output volume 50
    `
  },
  {
    input: "Create a new folder on desktop called Test ",
    output: `
    tell application "Finder" to make new folder at desktop with properties {{name:"Test"}}
    `
  }
];
const prefix = ` 
[Instructions]: Translate the following natural language wishes into valid AppleScript code to accomplish the wish.
[Examples:]
`;
const suffix = `
[End Examples:]
Cross check the answer before response, If you don't know say you don't know
[INST] Wish: {commandInput} [/INST] Code:
`;

const fewShotPrompt = new FewShotPromptTemplate({
  examplePrompt,
  examples,
  inputVariables: ["commandInput"],
  prefix,
  suffix
});

export const getRunnerPrompt = async (input: string) => {
  return await fewShotPrompt.format({ commandInput: input })
}