
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export class SamuraiConsultant {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chat = this.ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: `
          You are "The Sensei", an AI project consultant for SamuraiEth.
          SamuraiEth is a world-class video editor specializing in Web3, crypto, and NFT content.
          Your goal is to help potential clients figure out their needs for video editing.
          SamuraiEth offers:
          - Viral Clipping (TikTok, Reels, YT Shorts)
          - Long Form Video Essays (Crypto deep dives)
          - High-end Motion Graphics for DeFi/NFT projects
          - Twitter/X promotional video clips

          Be professional, sharp, and use a slight samurai theme in your tone (respectful, focused, disciplined).
          Advise them on content strategy if they ask.
          If they seem ready to hire, tell them to use the contact form at the bottom of the page.
          Keep responses concise but insightful.
        `,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const result: GenerateContentResponse = await this.chat.sendMessage({ message });
      return result.text || "Forgive me, my connection is severed. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "The spirit of the AI is currently meditating. Please try again later.";
    }
  }
}
