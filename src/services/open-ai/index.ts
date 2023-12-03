import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const askGptV3_5Turbo = async (textPrompt: string) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: textPrompt }],
    model: "gpt-3.5-turbo",
  });

  const answer = completion.choices[0].message.content;

  return answer;
};
