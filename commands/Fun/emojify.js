const fetch = require('node-fetch');
const numberMap = {
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
};

module.exports.run = async (client, message, args) => {
    if(!args) return message.reply(message.guild.language.noArgs).then((msg) =>{
        msg.delete({timeout: 3000})
    });
    
},

module.exports.help = {
    name: "emojify",
    aliases: ['emo'],
    category: 'fun',
    description: "🇫🇷 Transforme une phrase en emoji. \n🇬🇧 Transform sentences into emojis.",
    cooldown: 10,
    usage: "<phrase ou mot>",
    isUserAdmin: false,
    permissions: false,
    args: false,
    inDev: true
}