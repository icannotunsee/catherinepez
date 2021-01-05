const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('girls kingdom', { type: 'WATCHING' });
});


  client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('d!say') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
        message.delete()
        var saytext = args.join(" ");
        message.channel.send(saytext);
    }
  });

client.on('message', message => {
  const args = message.content.split(" ").slice(1);
  if(message.content.startsWith('d!announce') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
      message.delete()
      var saytext = args.join(" ");
      client.channels.get(<#780917089066025020>).send(saytext);
    }
  });

  client.login(process.env.BOT_TOKEN);
