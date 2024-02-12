import { PromptTemplate,FewShotPromptTemplate } from "@langchain/core/prompts";


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

export const fewShotPrompt = new FewShotPromptTemplate({
  examplePrompt,
  examples,
  inputVariables: ["commandInput"],
  prefix,
  suffix
});

// console.log({ prompt: await fewShotPrompt.format({ commandInput: "Open Screen Recording" }) })


//V2
// Instructions: Translate the following natural language wishes into valid AppleScript code to accomplish the wish.

// Examples:

// [INST] Wish: Open Safari [/INST] Code: tell application "Safari" to activate

// [INST] Wish: Set volume to 50% [/INST] Code: set volume output volume 50

// [INST] Wish: Take a screenshot and save to desktop [/INST] Code: tell application "Finder" to set theClipboard to (open location "desktop" as alias)'s POSIX path tell application "System Events" to keystroke "3" using command down

// [INST] Wish: Turn on Do Not Disturb mode [/INST] Code: tell application "System Preferences" reveal anchor "doNotDisturb" of pane id "com.apple.preference.notifications" end tell

// [INST] Wish: Create a new folder on desktop called Test [/INST] Code: tell application "Finder" to make new folder at desktop with properties {name:"Test"}

// [INST] Wish: Open Notes [/INST]