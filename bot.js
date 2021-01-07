const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('girls kingdom', { type: 'WATCHING' });
});


  client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('~say') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
        message.delete()
        var saytext = args.join(" ");
        message.channel.send(saytext);
    }
  });

client.on('message', message => {
  const args = message.content.split(" ").slice(1);
  if(message.content.startsWith('~announce') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
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
    const args = message.content.split(" ").slice(1);
    if(message.content.toLowerCase().includes("dyke") || message.content.toLowerCase().includes("nigga") || message.content.toLowerCase().includes("nigger")
      || message.content.toLowerCase().includes("fags") || message.content.toLowerCase().includes("fag") || message.content.toLowerCase().includes("faggot")
      || message.content.toLowerCase().includes("retard") || message.content.toLowerCase().includes("retarded") || message.content.toLowerCase().includes("chink")
      || message.content.toLowerCase().includes("tranny") || message.content.toLowerCase().includes("fucktard") || message.content.toLowerCase().includes("niggas")
      || message.content.toLowerCase().includes("niggers") || message.content.toLowerCase().includes("faggots") || message.content.toLowerCase().includes("retards")
      || message.content.toLowerCase().includes("chinks") || message.content.toLowerCase().includes("trannies")
      || message.content.toLowerCase().includes("dykes")) {
       let badMsg = message.content;
       let badMsgChan = message.guild.channels.cache.get(message.channel.id);
       let badMsgUser = message.author;
       let logChan = message.guild.channels.cache.find(ch => ch.name === "queensguard");

       let log = new Discord.MessageEmbed()
          .setColor('#ff3a71')
          .setTitle("blacklisted word used")
          .addField("content", badMsg, true)
          .addField("found in", badMsgChan, true)
          .addField("sent by", badMsgUser, true)
          .setTimestamp()

       logChan.send(log);

       message.delete();
       message.reply("no derogatory words.");
    }
  });

client.on('message', message => {
  if(message.content.startsWith('~embedpic') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
      let removed = message.content.replace('~embedpic', '')
      let emb = new MessageEmbed()
          .setColor('#FFBCC9')
          .setDescription(removed)
          .setThumbnail('https://i.imgur.com/x5d9Qwq.jpg')
      
      message.channel.send(emb);
      message.delete();
  }
});

client.on('message', (message) => {
  if (message.content.includes('discord.gg/'||'discordapp.com/invite/') && message.channel.id != '783175753771515904') {
          let badMsg = message.content;
          let badMsgChan = message.guild.channels.cache.get(message.channel.id);
          let badMsgUser = message.author;
          let logChan = message.guild.channels.cache.find(ch => ch.name === "queensguard");

          let log = new Discord.MessageEmbed()
            .setColor('#ff3a71')
            .setTitle("invite link")
            .addField("content", badMsg, true)
            .addField("found in", badMsgChan, true)
            .addField("sent by", badMsgUser, true)
            .setTimestamp()

       logChan.send(log);

       message.delete();
       message.reply("no invite links here.");
  }
});

client.on('message', message => {
  if(message.content.startsWith('~embed') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
      let removed = message.content.replace('~embed', '')
      let emb = new MessageEmbed()
          .setColor('#FFBCC9')
          .setDescription(removed)
      
      message.channel.send(emb);
      message.delete();
  }
});

function tempmute(message, args, prefix, client) {
    var muterolename = "prisoners";
    var muteRole = message.guild.roles.cache.find(r => r.name === muterolename);
    var muteUser = message.mentions.members.first();
    var muteChannel = message.guild.channels.cache.find(ch => ch.name === "queensguard");
  
	if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you do not have permissions to imprison that person.");
	if (!muteUser) return message.reply("i don't think that person is in our kingdom.");
	if (!muteChannel) return message.reply("wrong channel.");
	if (!muteRole) return message.reply("there's no title called " + muterolename);
	if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.reply("you do not have permissions to imprison that person.");

	var prefixLength = prefix.length; //gets length of prefix
	var minutes = args[2]; //time in minutes
	var muteReason = message.content.slice(6 + prefixLength, prefixLength + message.content.length); //gets reason
	if (!muteReason) var muteReason = "no reason given"; //makes reason "no reason given" if no reason is added"

	var muteEmbed = new Discord.MessageEmbed()
	muteEmbed.setTitle("prisoner seized")
	muteEmbed.addField("prisoner", muteUser)
	muteEmbed.addField("reason", muteReason)
	muteEmbed.addField("minutes", minutes)
	muteEmbed.setFooter(`guard: ${message.author.tag}`)
	muteEmbed.setTimestamp();
	
  	message.content.send(muteEmbed)

	// You need to parse those arguments, I'll leave that to you.
        muteUser.removeRoles(muteUser.roles).then.muteUser.roles.add(muteRole, `muted ${muteUser} for ${minutes} minutes. reason: ${muteReason}`);

	timeout(minutes, muteUser, muteRole, message) //time the mute
}

function timeout(minutes, muteUser, mutedRole, message) {
	setTimeout(() => {
    muteUser.roles.remove(mutedRole, `released.`);

    var muteEmbed = new Discord.MessageEmbed()
    muteEmbed.setTitle("prison release")
    muteEmbed.addField("prisoner", muteUser)
    muteEmbed.addField("reason", 'prison time ended')
    muteEmbed.setFooter(`auto unmute by daenerys`)
    muteEmbed.setTimestamp();
    message.channel.send(muteEmbed)
  }, minutes * 60000); // time in ms
}

client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if (message.content.startsWith('~mute')) {
        let noprefix = message.content.replace('~mute', '')
        tempmute(noprefix);
    }
});

  client.login(process.env.BOT_TOKEN);
