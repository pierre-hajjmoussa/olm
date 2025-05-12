
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(AIzaSyA7oxHhqp1NOyJin4XmQjIGE1LXrSrn-Cw);

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent("Explain how AI works in a few words");
  const response = await result.response;
  const text = response.text();

  console.log(text);
}

main().catch(console.error);
