import axios from "axios";
import { personalInfo, GAME_KEY } from "../assets/aidata";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: GAME_KEY });

export async function getAIResponse(question) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: [
      {
        role: "user",
        parts: [{ text: `${personalInfo}\n\nUser Question: ${question}` }],
      },
    ],
  });
  if (response) {
    return response.text;
  } else {
    return "No response received from AI.";
  }
}
