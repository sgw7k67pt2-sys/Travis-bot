
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const facts = [
  "Travis Scott was born Jacques Bermon Webster II.",
  "Travis Scott was born in Houston, Texas.",
  "His album ASTROWORLD was released in 2018.",
  "SICKO MODE features Drake.",
  "Travis Scott created the Cactus Jack label.",
  "UTOPIA was released in 2023.",
  "Travis Scott has a song called goosebumps with Kendrick Lamar.",
  "His fans are often called the Ragers."
];

const songs = [
  "SICKO MODE",
  "goosebumps",
  "FE!N",
  "BUTTERFLY EFFECT",
  "HIGHEST IN THE ROOM",
  "MY EYES",
  "90210",
  "STARGAZING"
];

const albums = [
  "Rodeo (2015)",
  "Birds in the Trap Sing McKnight (2016)",
  "ASTROWORLD (2018)",
  "UTOPIA (2023)"
];

const quotes = [
  "It's lit!",
  "Straight up!",
  "La Flame!",
  "RAGE!"
];

const quiz = [
  {
    question: "What city was Travis Scott born in?",
    answer: "Houston"
  },
  {
    question: "What year was ASTROWORLD released?",
    answer: "2018"
  },
  {
    question: "What is Travis Scott's real first name?",
    answer: "Jacques"
  }
];

client.once("ready", () => {
  console.log(`TRAVIS BOT is online as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const command = message.content.toLowerCase().trim();

  if (["hi", "hello", "hey"].includes(command)) {
    return message.reply("WHAT'S GOOD RAGER? IT'S LIT!");
  }

  if (command === "!help") {
    return message.reply(
      "**TRAVIS BOT COMMANDS**\n" +
      "`!fact` Random Travis fact\n" +
      "`!song` Random Travis song\n" +
      "`!album` Travis album list\n" +
      "`!roast` Get roasted\n" +
      "`!rank` Random Travis rating\n" +
      "`!quote` Random hype quote\n" +
      "`!hype` Get hyped\n" +
      "`!travis` About Travis\n" +
      "`!astro` ASTROWORLD info\n" +
      "`!quiz` Travis quiz"
    );
  }

  if (command === "!fact") {
    return message.reply(
      facts[Math.floor(Math.random() * facts.length)]
    );
  }

  if (command === "!song") {
    return message.reply(
      "Your Travis song: **" +
      songs[Math.floor(Math.random() * songs.length)] +
      "**"
    );
  }

  if (command === "!album") {
    return message.reply(
      "**Travis Scott albums:**\n" + albums.join("\n")
    );
  }

  if (command === "!roast") {
    return message.reply(
      "Bro your music taste needs a Travis Scott update 😭"
    );
  }

  if (command === "!rank") {
    const rating = Math.floor(Math.random() * 11);
    return message.reply(
      `Your Rager rating is **${rating}/10**`
    );
  }

  if (command === "!quote") {
    return message.reply(
      quotes[Math.floor(Math.random() * quotes.length)]
    );
  }

  if (command === "!hype") {
    return message.reply(
      "WAKE UP RAGERS! WE TAKING OVER! IT'S LIT!"
    );
  }

  if (command === "!travis") {
    return message.reply(
      "**Travis Scott** is an American rapper, singer, songwriter and producer from Houston, Texas."
    );
  }

  if (command === "!astro") {
    return message.reply(
      "**ASTROWORLD** dropped in 2018. It includes SICKO MODE, STARGAZING and BUTTERFLY EFFECT."
    );
  }

  if (command === "!quiz") {
    const question = quiz[Math.floor(Math.random() * quiz.length)];
    return message.reply(
      `**TRAVIS QUIZ**\n${question.question}\nAnswer with your guess!`
    );
  }
});

client.login(process.env.DISCORD_TOKEN);
