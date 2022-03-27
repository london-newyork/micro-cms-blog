import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: '5cp2ved705',
    apiKey: process.env.API_KEY,
});