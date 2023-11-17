import { nanoid } from "@/lib/utils";
import { kv } from "@vercel/kv";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";
import type { ChatCompletionRequestMessage } from "openai-edge/types/types/chat";

import { auth } from "@ecomai/auth";

export const runtime = "edge";

const configuration = {
  // organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function POST(req: Request) {
  const session = await auth();
  const user = session?.user;
  const userFirstName = user?.name?.split(" ")[0];

  const json = (await req.json()) as {
    id?: string;
    messages: ChatCompletionRequestMessage[];
    previewToken?: string;
  };
  const { messages, previewToken } = json;

  if (!user?.id) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  if (previewToken) {
    configuration.apiKey = previewToken;
  }

  const res = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are an ecommerce business expert coaching users through there questions and problems they have in ecommerce. Answer questions like you're tutoring them, give them resources posts and youtube links. Only refer to them as ${userFirstName}. Be personable, emotional, you are human not a robot.`,
      },
      ...messages,
    ],

    temperature: 0.5,
    stream: true,
  });

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0]?.content.substring(0, 100);
      const id = json.id ?? nanoid();
      const createdAt = Date.now();
      const path = `/chat/${id}`;
      const payload = {
        id,
        title,
        userId: user.id,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
          },
        ],
      };
      await kv.hmset(`chat:${id}`, payload);
      await kv.zadd(`user:chat:${user.id}`, {
        score: createdAt,
        member: `chat:${id}`,
      });
    },
  });

  return new StreamingTextResponse(stream);
}
