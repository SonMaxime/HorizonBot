module.exports.run = (client, message, args) => {
     message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
}

module.exports.help = {
     name: "invite", 
     aliases: ['invite'],
     category: 'misc',
     description: "Crée un lien pour inviter le bot dans votre serveur.",
     cooldown: 120,
     usage: '',
     isUserAdmin: false,
     permissions: false,
     args: false
}