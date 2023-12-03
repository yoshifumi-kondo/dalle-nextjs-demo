export async function POST(req: Request) {
  const { textPrompt } = await req.json();
  return new Response(JSON.stringify({ answer: textPrompt }), { status: 200 });
}
