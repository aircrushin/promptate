import axios from 'axios';

export const PARTICIPANT_AI = 'AI';
export const PARTICIPANT_HUMAN = 'Human';

export const FINISH_REASON_STOP = 'stop';
export const FINISH_REASON_LENGTH = 'length';
const API_KEY = "sess-7KZWK9vWwzg81K51QMbuP30wEA7OP7jo7OpCdIGw"

const newClient = () => axios.create({
  baseURL: 'https://api.openai.com',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const createCompletion = (client:any) => ({
  model = 'text-davinci-003',
  //@ts-ignore
  prompt,
  temperature = 0.9,
  maxTokens = 160,
  frequencyPenalty = 0,
  presencePenalty = 0.6,
  stop = [
    ` ${PARTICIPANT_AI}:`,
    ` ${PARTICIPANT_HUMAN}:`,
  ],
}) => client.post('/v1/completions', {
  model,
  prompt,
  temperature: Number(temperature),
  max_tokens: Number(maxTokens),
  frequency_penalty: Number(frequencyPenalty),
  presence_penalty: Number(presencePenalty),
  stop,
});

export {
  newClient,
  createCompletion,
};