const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('girls kingdom', { type: 'WATCHING' });
});

client.on('messageReactionAdd', (reaction, user) => {
        let message = reaction.message, emoji = reaction.emoji;

        if ((emoji.name == '<a:GK_rotatingcrown:780890745678463046>') && (message.channel.id === '780600319834980403')) {
                message.guild.fetchMember(user.id).then(member => {
                        member.send("thanks for signing the rules. you can now access the server!");
                });
        }
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
  if(message.content.startsWith('!embedpic') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
      let removed = message.content.replace('!embedpic', '')
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
  if(message.content.startsWith('!embed') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
      let removed = message.content.replace('!embed', '')
      let emb = new MessageEmbed()
          .setColor('#FFBCC9')
          .setDescription(removed)
      
      message.channel.send(emb);
      message.delete();
  }
});

  client.login(process.env.BOT_TOKEN);
