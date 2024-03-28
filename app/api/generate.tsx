import { Configuration, OpenAIApi } from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  result?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createCompletion({
      model: "gpt-4", 
      prompt,
      temperature: 0.7,
      max_tokens: 150,
    });

    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate text from OpenAI" });
  }
}
