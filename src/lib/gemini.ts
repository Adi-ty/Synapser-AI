import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const configuration = new GoogleGenerativeAI(apiKey);

const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model: modelId });

export async function generateImagePrompt(name: string) {
    try {
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: `Generate a thumbnail description for my note title ${name}.`,
                },
                {
                    role: "model",
                    parts: "You are an creative AI assistance capable of  generating catchy thumbnail descriptions for my notes. Your output will be used by DALLE to generate a thumbnail. Description should be minimalistic and flat sytled.",
                },
            ],
            generationConfig: {
                maxOutputTokens: 100,
            },
        });

        const result = await chat.sendMessage(
            `Generate a thumbnail description for my note title ${name}.`
        );
        const response = await result.response;
        const imageDescription = response.text();

        return imageDescription;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
