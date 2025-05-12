import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: AIzaSyA7oxHhqp1NOyJin4XmQjIGE1LXrSrn-Cw });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

await main();
