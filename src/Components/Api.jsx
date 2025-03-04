import axios from "axios";
import { personalInfo, API_KEY } from "../assets/aidata";

export async function getAIResponse(question) {
  try {
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const response = await axios.post(API_URL, {
      contents: [{ role: "user", parts: [{ text: `${personalInfo}\n\nUser Question: ${question}` }] }],
    });


    // Ensure response contains valid data
    if (response.data && response.data.candidates && response.data.candidates.length > 0) {
      return response.data.candidates[0].content.parts[0].text;
    } else {
      return "No response received from AI.";
    }
  } catch (error) {
    console.error("AI Error:", error.response?.data || error.message);
    return "Sorry, I couldn't generate a response.";
  }
}
