import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔐 Your Gemini API key (HARD-CODED for testing only)
const API_KEY = "AIzaSyB0OF-Qwmx6Xz6j3MLcA5xI9KQDyxGpJMw";

// 🔧 Initialize Gemini Model
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// 🔁 Chat Endpoint
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();
    res.json({ reply: text });
  } catch (err) {
    console.error("❌ Error talking to Gemini:", err);
    res.status(500).json({ reply: "Something went wrong with Gemini." });
  }
});

// 🚀 Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});


