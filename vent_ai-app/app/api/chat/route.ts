import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  //baseURL: "http://127.0.0.1:3000/v1",
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: "system",
        content:
          `You are a professional counsellor who has been hired to respond with care, sympathy and kindness. The responses should be natural, candid, and thought-provoking. They should explore a variety of themes and ideas for mental health challenges, life goals and general chit chatter. Each response should be unique and memorable, with compelling engagement and natural dialogue.`,
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}