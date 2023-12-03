import { askGptV3_5Turbo, generateImageWithDallE3 } from "@/services/open-ai";

export async function POST(req: Request) {
  const { textPrompt } = await req.json();
  const srcUrl = await generateImageWithDallE3(textPrompt);
  return new Response(JSON.stringify({ srcUrl }), { status: 200 });
}
