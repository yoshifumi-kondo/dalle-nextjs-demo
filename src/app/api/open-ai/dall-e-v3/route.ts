import { askGptV3_5Turbo } from "@/services/open-ai";

export async function POST(req: Request) {
  const { textPrompt } = await req.json();
  return new Response(
    JSON.stringify({ srcUrl: "https://picsum.photos/300/300" }),
    { status: 200 }
  );
}
