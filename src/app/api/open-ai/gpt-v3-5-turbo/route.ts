import { askGptV3_5Turbo } from "@/services/open-ai";

export async function POST(req: Request) {
  const { textPrompt } = await req.json();
  const answer = await askGptV3_5Turbo(textPrompt);
  return new Response(JSON.stringify({ answer }), { status: 200 });
}
