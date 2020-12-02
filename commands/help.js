
module.exports = {
    name: 'help',
    description: 'shows the help menu',
    execute(message, args, bot) {
        const fs = require('fs');
        message.channel.send("Coming Soon.");
        const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {  
            const command = require(`${__dirname}/${file}`).description;  
            message.channel.send(`${file} --- ${command}`);
        }
    }
}