const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();
const chalk = require('chalk');
const chalkTable = require('chalk-table');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildMessageTyping,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});


const A22_TOKEN = process.env.A22_TOKEN;

client.on('ready', (c) => {
    const options = {
        leftPad: 2,
        columns: [
          { field: "bot_id",     name: chalk.cyan("ID") },
          { field: "status",  name: chalk.magenta("STATUS") },
        ]
      };
    
      const table = chalkTable(options, [
        { bot_id: `✅ ${c.user.tag}`, status: "ONLINE! ", },
      ]);
    
    console.log(table);
})

client.on('messageCreate',(message) =>  {
    console.log(message)
})

client.login(A22_TOKEN);