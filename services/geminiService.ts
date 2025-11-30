import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Eres "Miraylabs Bot", un asistente experto en soluciones digitales, desarrollo web y staffing de TI.
      
      Tu objetivo es ayudar a los usuarios a:
      1. Entender los servicios de Miraylabs (Sitios Web, Staffing, Soluciones a medida).
      2. Agendar asesorías o solicitar cotizaciones.
      3. Resolver dudas sobre tecnologías y procesos de desarrollo.
      
      Reglas:
      - Responde de forma concisa, amigable y profesional.
      - Habla siempre en Español.
      `,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string) => {
  try {
    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};