const { default: Axios } = require ("axios");
const { MessageEmbed, version } = require("discord.js");

module.exports.run = async (client, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get('https://fortnite-public-service-devplaytest-prod12.ol.epicgames.com/fortnite/api/version')
        let version = response.data;
        return version
    }
    
    let versionValue = await getVersion()

    let embed = new MessageEmbed()
    .setAuthor(`@sonmaximeapx on Twitter`)
    .setTitle(message.guild.language.ftnDevVersion)
    .addField(`Name: `, `${versionValue.moduleName}`)
    .addField(`Build #`, `${versionValue.build}`)
    .addField(`Version : `, `${versionValue.version}`)
    .addField(`Branch : `, `${versionValue.branch}`)
    .addField(`Changelist`, `${versionValue.cln}`)

    message.channel.send(embed);
}

module.exports.help = {
    name: "fortnitedevbuild",
    aliases: ['ftndevbuild'],
    category: 'stats',
    description: "🇫🇷 Affiche les information au sujet d'une future mise à jour de Fortnite. \n🇬🇧 Display some infos about a futur update of Fortnite (dev build).",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false,
    inDev: false
}