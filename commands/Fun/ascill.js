const figlet = require('figlet');

module.exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) { return message.channel.send("You are not authorized to do this!"); }
    const text = args.join(" ");
    if (text.length == 0) { return message.channel.send("provide something to say") } else if (text.length > 15) { return message.channel.send("Too long") }
    const out = figlet.textSync(text, { horizontalLayout: 'full' })
    if (!out) { return message.channel.send("Your message consists of entirely unsupported characters") }
    return message.channel.send("```" + out + "```");
}

module.exports.help = {
    name: "asciii",
    aliases: ["imagetext"],
    description: "test asciii",
    cooldown: 10,
    usage: '<args>',
    isUserAdmin: false,
    permissions: false,
    args: true,
    inDev: true
}
