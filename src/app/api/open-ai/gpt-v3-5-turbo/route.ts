export async function POST(req: Request) {
  const { textPrompt } = await req.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return new Response(JSON.stringify({ answer: textPrompt }), { status: 200 });
}
