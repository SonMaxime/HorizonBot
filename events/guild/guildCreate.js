const { Role } = require("discord.js");

module.exports = async (client, guild) => {
  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  };

  await client.createGuild(newGuild);

  await db.set(`${guild.id}.language`, "fr");
  console.log(`[JOINED GUILD]: ${guild.name} | ${guild.id}`);
};
