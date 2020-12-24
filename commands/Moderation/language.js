const fs = require("fs");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings) => {
        let lang = args[0];

        if (!lang) return await message.channel.send(message.guild.language.specify_language);

        let languages = fs.readdirSync("./locales/")
            .filter(file => file.endsWith(".json"))
            .map(file => file.replace(".json", ""));
        
        if (!languages.includes(lang)) return await message.channel
            .send(message.guild.language.specify_valid_language.replace(/{languages}/g, languages.join(", ")));

        client.db.set(`${message.guild.id}.language`, lang);
        message.guild.language = require(`../../locales/${lang}.json`);
        await message.channel.send(message.guild.language.language_updated);
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.LANGUAGE;