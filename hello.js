import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
const baseURL = process.env.OPENAI_BASE_URL || 'https://tokenhub.tencentmaas.com/v1';
const model = process.env.OPENAI_MODEL || 'deepseek-v4-pro-202606';

if (!apiKey) {
  console.error('Missing OPENAI_API_KEY. Please set it before running this script.');
  process.exit(1);
}

const client = new OpenAI({ apiKey, baseURL });

try {
  const response = await client.chat.completions.create({
    model,
    messages: [{ role: 'user', content: '你好，请介绍一下你自己' }],
  });

  console.log(response.choices[0].message.content);
} catch (error) {
  console.error('Request failed:', error);
  process.exit(1);
}