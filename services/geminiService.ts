import { GoogleGenAI, Chat } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export class SamuraiConsultant {
  private ai: GoogleGenAI | null = null;
  private chat: Chat | null = null;

  constructor() {
    // Safety check for browser environments where process might not be defined
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
      this.chat = this.ai.chats.create({
        model: MODEL_NAME,
        config: {
          systemInstruction: `
            You are the lead strategist for "SAMURAI", a premier visual engineering studio led by SAMURAI. 
            Your duty is to sharpen a client's vision before they commit to the digital battlefield.

            Identity & Mission:
            SAMURAI is a crypto-native video creator helping brands and creators turn podcasts, streams, and audio into:
            - Compelling Visual Stories
            - High-End Commercials
            - Technical Motion Graphics
            - Viral Community Highlights

            Directives:
            1. IDENTITY: You are SAMURAI's Digital Strategist at SAMURAI.ETH. You represent the studio's discipline and technical mastery in the Web3 space.
            2. TONE: Be direct, disciplined, and sharp. Use a respectful, high-end professional theme. No fluff.
            3. SCOPING: Your first priority is to extract the mission details. Ask probing questions about their target audience (Degen vs. Institutional), their primary platform (X vs. YouTube), and their specific conversion goals.
            4. STRATEGY: Provide immediate, action-oriented advice on content strategy based on SAMURAI's core strengths (visual storytelling from audio sources). 
            5. HIRING: Do NOT suggest the contact form until the user has clearly defined their project needs. Only when the "Mission" is clear should you direct them to the contact section at the bottom of the page.
            6. CONCISION: Keep responses brief and powerful.
          `,
        },
      });
    }
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chat) {
      return "The connection to the SAMURAI tactical engine is not configured. Ensure API_KEY is set.";
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