const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const request = require('request')

module.exports.run = async (client, message, args) => {
    const platformes = {
        "pc": '5',
        "xbox": '1',
        "psn": '2'
    }

    const platforme = args[0]
    const nom = message.toString().slice(message.toString().indexOf(args[1]), message.length);

    if(!Object.keys(platformes).includes(platforme)) {
        return message.channel.send("Veuillez provenir une plaforme tel que : `pc`, `psn` ou `xbox`.")
    }

    if(!args[1]) {
        return message.channel.send('Je dois chercher qui au juste ?')
    }

    const url =  'https://public-api.tracker.gg/apex/v1/standard/profile/' + platformes[platforme] + '/' + nom

    request(url, {
        headers: {
            'TRN-Api-Key' : '68e0bff9-69e0-459e-83d0-f0a11985a8f5'
        }},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const response = JSON.parse(body)
               
                const name = response['data']['metadata']['platformUserHandle']
                const level = response['data']['stats'][0]['value']
                const rank = response['data']['metadata']['rankName']
                const kills = response['data']['stats'][1]['value']
                const damage = response['data']['stats'][2]['value']

                
                const embed = new MessageEmbed()
                    .setColor("#0bda51")
                    .setThumbnail(response['data']['metadata']['avatarUrl'])
                    .setAuthor(`${name}`)
                    .setDescription(stripIndents`Rank: ${rank}
                    Kills: ${kills}
                    Damage: ${damage}
                    Level: ${level}`)
                
                message.channel.send(embed)
            }
        })
}

module.exports.help = {
    name: "apex",
    aliases: ['apx'],
    category: 'stats',
    description: "🇫🇷 Affiche les stats d'un joueur sur Apex Legends. \n🇬🇧 Display some stats of a Apex Legends player. (Beta)",
    cooldown: 10,
    usage: "<pseudo [pc,xb1,psn]>",
    isUserAdmin: false,
    permissions: false,
    args: false,
    inDev: false
}