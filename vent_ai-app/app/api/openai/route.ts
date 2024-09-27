// import OpenAI from 'openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';

// const openai = new OpenAI({
//     // apiKey: process.env.OPENAI_API_KEY,
//   baseURL: "http://127.0.0.1:3000/v1/",
// });

// export const runtime = 'edge';

// export async function POST(req: Request, res: Response) {
//   const { messages } = await req.json();
//   console.log('messages:', messages);

//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     stream: true,
//     temperature: 1,
//     messages: [
//       {
//         role: "system",
//         content:
//           `You are a professional counsellor who has been hired to respond with care, sympathy and kindness. The responses should be natural, candid, and thought-provoking. They should explore a variety of themes and ideas for mental health challenges, life goals and general chit chatter. Each response should be unique and memorable, with compelling engagement and natural dialogue.`,
//       },
//       ...messages,
//     ],
//   });

//   const stream = OpenAIStream(response);
//   return new StreamingTextResponse(stream);
// }

//original
// import OpenAI from "openai";
// import { OpenAIStream, StreamingTextResponse } from "ai";
//import { Stream } from "stream";
// import { Messages } from 'openai/resources/beta/threads/messages';
import Together from "together-ai";

export const runtime = "edge";

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json();

  const together = new Together({
    apiKey: process.env.TOGETHER_API_KEY || "",
    // baseURL: "https://api.together.xyz/v1",
  });

  //console.log("messages:, messages");
  //console.log(`messages: ${messages}`);

  const response = await together.chat.completions.create({
    // model: 'gpt-3.5-turbo',
    model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a professional counsellor who has been hired to respond with care, sympathy and kindness. The responses should be natural, candid, and thought-provoking. They should explore a variety of themes and ideas for mental health challenges, life goals and general chit chatter. Each response should be unique and memorable, with compelling engagement and natural dialogue.",
      },
      ...messages,
    ],
    max_tokens: 512,
    temperature: 0.7,
    top_p: 0.7,
    top_k: 50,
    repetition_penalty: 1,
    stop: ["<|eot_id|>", "<|eom_id|>"],
    stream: true,
  });

  // Variable to accumulate content from each chunk
  let fullContent = "";

  // Process the streamed chunks
  for await (const chunk of response) {
    const delta = chunk.choices[0].delta;

    if (delta && delta.content) {
      // Accumulate the content from each chunk
      fullContent += delta.content;
    }

    console.log("Chunk content: ", delta.content);
  }

  // Now you have the full content after all chunks are processed
  console.log("Full accumulated response: ", fullContent);
  return new Response(JSON.stringify({ fullContent }), {
    headers: { "Content-Type": "application/json" },
  });
}

// console.log(response.choices[0].message.content);
// const stream = OpenAIStream(response);
// return new StreamingTextResponse(stream);

//console.log(response.choices[0].message.content);

// const stream = OpenAIStream(response);
// return new StreamingTextResponse(stream);
