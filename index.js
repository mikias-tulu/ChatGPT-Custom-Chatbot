import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';


async function main() {
    console.log(colors.bold.green('Hello there!, Welcome to Terminal Custom Chatbot!'));
    console.log(colors.bold.green('You can start chatting with the bot.'));

    const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            { role:'user', content: 'what is Ethiopia best known for?' }
        ]
    });

    console.log(chatCompletion.data.choices[0]);
}

main ();