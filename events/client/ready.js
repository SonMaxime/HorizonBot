const Dashboard = require("./../../dashboard/dashboard");

module.exports = async client => {
  console.log(`${client.user.tag} est co`);

  let activities = ['.help', 'pfp by @ikadakat'], i = 0;

  setInterval(() => client.user.setPresence({ activity: { name: `${activities[Math.floor(Math.random() * activities.length)]}`, type: 'PLAYING' }, status: 'dnd' }), 300000); 

  for (let guild of client.guilds.cache.array()) {

    let lang = await client.db.fetch(`${guild.id}.language`);

    if (!lang) {
        lang = "fr";
        client.db.set(`${guild.id}.language`, "fr"); 
    }

    guild.language = require(`./../../locales/${lang}.json`);
  }
  
  Dashboard(client);
}