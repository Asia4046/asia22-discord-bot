const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'hey',
        description: 'Says Hi',
    },
];

const rest = new REST({ version: 10 }).setToken(process.env.A22_TOKEN);

(async() => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log('Successfully registered slash commands.');
    } catch (error) {
        console.log(`There was an error ${error}`);
    }
})();