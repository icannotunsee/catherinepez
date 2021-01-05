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
      channel = client.channels.cache.get('780671823611428905');
      channel.send(saytext);
    }
  });

client.on("message", message => {
    const args = message.content.split(" ").slice(1);
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if (message.mentions.has(client.user.id)) {
        message.reply("i can't do much. please ping <@566279767544823808> or an online staff member if there is an issue.");
    }
  });
    
 client.on('message', message => {
    const CHANNEL = 'queensguard';
    const args = message.content.split(" ").slice(1);
    if(message.channel.type == 'text' && message.content.toLowerCase() === "dyke") {
        var logger = message.guild.channels.find(
        channel => channel.name === CHANNEL
        );
        if (logger) {
         const embed = new Discord.RichEmbed()
          .setTitle('slur used')
          .addField('Author', message.author.username)
          .addField('Message', message.cleanContent)
          .setThumbnail(message.author.avatarURL)
          .setColor('0x00AAFF');
         logger.send({ embed });
        }
        message.delete()
        message.reply("no derogatory slurs here.");
    }
  });

  client.login(process.env.BOT_TOKEN);
