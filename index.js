require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Setup Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Setup Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Fungsi split pesan panjang >3000 karakter
function splitMessage(text, maxLength = 3000) {
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    chunks.push(text.slice(start, start + maxLength));
    start += maxLength;
  }
  return chunks;
}

// Event ready
client.once("ready", () => {
  console.log(`Bot online sebagai ${client.user.tag}`);
});

// Event message
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith("!ai")) return;

  const prompt = message.content.replace("!ai", "").trim();
  if (!prompt) return message.channel.send("Masukkan prompt AI dulu bre 😅");

  try {
    const result = await model.generateContent(prompt);

    const replyText =
      result.response?.text?.() || result.output_text || "AI ga bisa jawab 😅";

    const chunks = splitMessage(replyText);
    for (const chunk of chunks) {
      await message.reply(chunk);
    }
  } catch (err) {
    console.error("Error AI:", err);
    await message.channel.send("Error bre, AI lagi ngambek 😅");
  }
});

client.login(process.env.DISCORD_TOKEN);
