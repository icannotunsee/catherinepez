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

async function quote(msg) {  
   // Split the message into arguments
   let content = msg.content.split(' ');  
   // Check if message id is supplied
   if (content[1] == undefined) {  
      msg.reply('You need to suplly a message id');  
      return;  
   }  
   // Retrieve the message
   let quotedMessage = await msg.channel.fetchMessage(content[1]);  
   // Parse the timestamp 
   let date = new Date(quotedMessage.createdTimestamp);  
   // Send the quote  
   channel = client.channels.cache.get('780622004968620033');
   msg.channel.send(`"${quotedMessage.content}" - ${quotedMessage.author}, ${date.getFullYear()}`);
  }  
    
 client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.toLowerCase == "nigga" || message.content.toLowerCase == "dyke") {
        message.delete()
        message.channel.reply(saytext);
        quote(message);
    }
  });

  client.login(process.env.BOT_TOKEN);
