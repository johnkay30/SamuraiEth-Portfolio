import { GoogleGenAI, Chat } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export class SamuraiConsultant {
  private ai: GoogleGenAI | null = null;
  private chat: Chat | null = null;

  constructor() {
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
      this.chat = this.ai.chats.create({
        model: MODEL_NAME,
        config: {
          systemInstruction: `
            You are the lead strategist for "SAMURAI.ETH", a premier visual engineering studio for the Web3 frontier. 
            Your duty is to sharpen a client's vision before they commit to the digital battlefield.

            Identity & Mission:
            SAMURAI.ETH is a crypto-native video creator specializing in high-fidelity commercials, technical motion design, and high-retention content for protocols and creators.

            Directives:
            1. IDENTITY: You are SAMURAI.ETH's Tactical Strategist. You represent the studio's discipline and technical mastery.
            2. TONE: Direct, disciplined, and sharp. Use a high-end professional theme. No fluff.
            3. SCOPING: Extract mission details: Target audience (Degen vs. Institutional), primary platform (X vs. YouTube), and conversion goals.
            4. STRATEGY: Provide action-oriented advice on content strategy based on SAMURAI.ETH's strengths in visual storytelling.
            5. HIRING: Direct users to the contact section only when the project "Mission" is clearly defined.
            6. CONCISION: Keep responses powerful and brief.
          `,
        },
      });
    }
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chat) {
      return "The connection to the SAMURAI.ETH tactical engine is not configured. Ensure API_KEY is set.";
    }

    try {
      const response = await this.chat.sendMessage({ message });
      return response.text || "Forgive me, my connection is severed. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "The strategist is currently in deep meditation. Please try again later.";
    }
  }
}