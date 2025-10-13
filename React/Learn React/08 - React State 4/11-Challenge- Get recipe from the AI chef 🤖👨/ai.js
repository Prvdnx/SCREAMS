import Anthropic from "@anthropic-ai/sdk"
import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

//============================
// const anthropic = new Anthropic({
//     // Make sure you set an environment variable
//     // for ANTHROPIC_API_KEY
//     apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
//     // apiKey: process.env.REACT_APP_ANTHROPIC_API_KEY,
//      dangerouslyAllowBrowser: true,
// })

// export async function getRecipeFromChefClaude(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")
//     try {
//         const msg = await anthropic.messages.create({
//             model: "claude-3-haiku-20240307",
//             max_tokens: 1024,
//             system: SYSTEM_PROMPT,
//             messages: [
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//         });
//         return msg.content[0].text
//     } catch (err) {
//         console.error(err.message)
//         return "Sorry, I couldn't generate a recipe at this time. Please try again later.";
//     }
// }

//============================
// // Make sure you set an environment variable 
// // for HF_ACCESS_TOKEN
// const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)
// // const hf = new HfInference(process.env.REACT_APP_HF_ACCESS_TOKEN)

// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")
//     try {
//         const response = await hf.chatCompletion({
//             model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//             messages: [
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//             max_tokens: 1024,
//         })
//         return response.choices[0].message.content
//     } catch (err) {
//         console.error(err.message)
//         return "Sorry, I couldn't generate a recipe at this time. Please try again later.";
//     }
// }


//======== USING FREE CLAUDE API FROM Puter.js ========//
export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await puter.ai.chat(
            `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            {
                model: 'claude-sonnet-4',
                system: SYSTEM_PROMPT
            }
        );
        return response.message.content[0].text;
    } catch (err) {
        console.error("Claude Recipe Generation Error:", err);
        return "Sorry, I couldn't generate a recipe at this time. Please try again later.";
    }
}

// Keeping "getRecipeFromMistral" function name as fallback using Puter.js
export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await puter.ai.chat(
            `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            {
                model: 'claude-opus-4',
                system: SYSTEM_PROMPT
            }
        );
        return response.message.content[0].text;
    } catch (err) {
        console.error("Mistral Recipe Generation Error:", err);
        return "Sorry, I couldn't generate a recipe at this time. Please try again later.";
    }
}