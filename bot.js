const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('unsee content', { type: 'WATCHING' });
});


  client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('c!say') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
        message.delete()
        var saytext = args.join(" ");
        message.channel.send(saytext);
    }
  });

client.on('message', msg => {
    if (msg.content === 'mod abuse') {
      msg.reply('use <#751881836455657533> to report a mod.');
      msg.delete()
    }
  });

client.on('message', msg => {
    if (msg.content === 'admin abuse') {
      msg.reply('use <#751881836455657533> to report an admin.');
      msg.delete()
    }
  });


client.on('message', msg => {
    if (msg.content === 'staff abuse') {
      msg.reply('use <#751881836455657533> to report staff.');
      msg.delete()
    }
  });

  client.login(process.env.BOT_TOKEN);
