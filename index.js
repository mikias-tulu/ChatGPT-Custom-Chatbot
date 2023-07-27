import openai from "./config/open-ai.js";
import readlineSync from "readline-sync";
import colors from "colors";

async function main() {
  console.log(
    colors.bold.green("Hello there!, Welcome to Terminal Custom Chatbot!")
  );
  console.log(colors.bold.green("You can start chatting with the bot."));

  
  while (true) {
    const userInput = readlineSync.question(colors.yellow("You: "));

    try {
      
      // Add latest user input
      messages.push({ role: "user", content: userInput });

      // Call the API with user input
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

      } catch (error) {
      console.error(colors.red(error));
    }
  }
}

main();
