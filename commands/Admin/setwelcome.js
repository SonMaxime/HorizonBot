const Welcome = require('../../database/models/Welcome')

module.exports.run = async (message, args) => {
    if (args[0] === 'disable') {
        const verify = await Welcome.findOne({ guildID: message.guild.id, reason: 'welcome' })
        if (verify) {
            if (!verify.message) {
                return message.channel.send('Vous devez déjà avoir un message de bienvenue activé pour pouvoir le desactiver.')
            }

            const newChannel = await Welcome.findOneAndUpdate({ guildID: message.guild.id, message: null, reason: 'welcome'});
            let welcomeMessage = verify.message;
            if (welcomeMessage.length > 50) welcomeMessage = welcomeMessage.slice(0, 50) + '...';

            const embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.language.setWelcomeTitle}`)
            .setDescrition()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setFooter(message.client.footer)
            .setColor("#2f3136");
            
            return message.channel.send(embed)
        } else {
            return message.channel.send('non.')
        }
    }

    const verify = await Welcome.findOne({ serverID: message.guild.id, reason: `welcome` })
    if (verify) {
        let welcomeMessage = message.content.slice(message.content.indexOf(args[0]), message.content.length);
        const newchannel = await Welcome.findOneAndUpdate({ serverID: message.guild.id, reason: `welcome` }, { $set: { message: welcomeMessage, reason: `welcome` } }, { new: true });
        if (welcomeMessage.length > 20) welcomeMessage = welcomeMessage.slice(0, 1021) + '...';

        const embed = new Discord.MessageEmbed()

        .setTitle('Paramètres : `Messages de bienvenue`')
        .setDescription(`Le message de bienvenue a été mis à jour avec succès.`)
        .addField('Message', `${verify.message || 'Aucun message'} ➔ ${welcomeMessage}`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(message.client.footer)
        .setColor("#2f3136");

        return message.channel.send(embed)
    } else {

        message.channel.send(`Veuillez d'abord activer le plugin en faisant : \`welcome on\``)
    }
}

module.exports.help = {
    name: "setwelcomemessage",
    aliases: ['swm'],
    category: 'admin',
    description: "PLACEHOLDER",
    cooldown: 3,
    usage: '<value>',
    isUserAdmin: true,
    permissions: false,
    args: true
}