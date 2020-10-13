const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('unsee content', { type: 'WATCHING' });
});


  client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('c!say') && message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
        message.delete()
        var saytext = args.join(" ");
        message.channel.send(saytext);
    }
  });

  client.on('message', message => {
     const args = message.content.split(" ").slice(1);
     if(message.content.toLowerCase().startsWith(PREFIX + 'slowmode')) {
         var str = message.content.split(prefix + 'slowmode ');
         var num = parseInt(str[1], 10);
         message.channel.setRateLimitPerUser(num).then(() => {
         message.channel.send(`slowmode set to ${num}s.`);
    })
  });
         
}


  client.login(process.env.BOT_TOKEN);
