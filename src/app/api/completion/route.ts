import { OpenAIApi, Configuration } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
    const { prompt } = await req.json();

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `Act as a helful AI embeded in a text editor app that is used to autocomplete sentences The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
                    AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.`,
            },
            {
                role: "user",
                content: `I am writing piece of text in a text editor app.
                Help me complete my train of thought here: ##${prompt}##.
                Keep the tone of the text consistent with the tone of the prompt.
                keep the text short and concise.`,
            },
        ],
        stream: true,
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
}
