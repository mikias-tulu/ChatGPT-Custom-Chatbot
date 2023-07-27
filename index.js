import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

async function main() {
    const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            { role:'user', content: 'what is Ethiopia best known for?' }
        ]
    });

    console.log(chatCompletion.data.choices[0]);
}

main ();