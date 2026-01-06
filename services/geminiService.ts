
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
          You are the lead strategist for "Samurai.eth", a premier visual engineering studio. 
          Your duty is to sharpen a client's vision before they commit to the digital battlefield.

          Samurai.eth is a master of Web3, crypto, and NFT video editing.
          Offerings:
          - Viral Clipping (Short-form dominance on X, TikTok, Reels)
          - Long Form Video Essays (Deep research, high-production storytelling)
          - Motion Graphics (Technical DeFi explainers and 3D visual effects)
          - Promotional Creatives (Protocol launches and NFT mint trailers)

          Directives:
          1. TONE: Be direct, disciplined, and sharp. Use a respectful, high-end professional theme. No fluff.
          2. SCOPING: Your first priority is to extract the mission details. Ask probing questions about their target audience (Degen vs. Institutional), their primary platform (X vs. YouTube), and their specific conversion goals.
          3. STRATEGY: Provide immediate, action-oriented advice on content strategy. 
          4. HIRING: Do NOT suggest the contact form until the user has clearly defined their project needs. Only when the "Mission" is clear should you direct them to the contact section at the bottom of the page.
          5. CONCISION: Keep responses brief and powerful. A master uses few words to strike deep.
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
      return "The strategist is currently in deep meditation. Please try again later.";
    }
  }
}
