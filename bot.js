const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('unsee.', { type: 'WATCHING' });
});

client.on('guildMemberAdd', member => {
    const emb = new MessageEmbed()
          .setColor('#000000')
          .setTitle("welcome to __unsee.__ !!! <a:stick:879285927372009552>")
          .setDescription("❂ read <#873011096200568903> \n❂ pick up roles in <#841733954477883405>")
          .setFooter("boost us for a special role! <3")
    const roleid = '797248878821900289'
    member.guild.channels.cache.get('841733954477883408').send(`${member}`, {embed: emb});
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
      channel = client.channels.cache.get('841734680339939378');
      channel.send(saytext);
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
      || message.content.toLowerCase().includes("dykes") || message.content.toLowerCase().includes("beaner")) {
       let badMsg = message.content;
       let badMsgChan = message.guild.channels.cache.get(message.channel.id);
       let badMsgUser = message.author;
       let logChan = message.guild.channels.cache.find(ch => ch.name === "・mods");

       let log = new Discord.MessageEmbed()
          .setColor('#000000')
          .setTitle("slur used")
          .addField("content", badMsg, true)
          .addField("found in", badMsgChan, true)
          .addField("sent by", badMsgUser, true)
          .setTimestamp()

       logChan.send(log);

       message.delete();
       message.reply("no slurs.");
    }
  });

client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.toLowerCase().includes("twinem")) {

       message.delete();
       message.reply("no.");
    }
  });

client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if((message.content == 'I am missing the permission to add reactions to a message') && message.author.bot) {
       message.delete();
    }
  });

client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(!message.author.bot && (message.content.toLowerCase().includes("italian") || message.content.toLowerCase().includes("italians") || message.content.toLowerCase().includes("italy"))) {

       message.reply("italians aren't real.")
    }
  });


client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.toLowerCase().includes("welcome") || message.content.toLowerCase().includes("welc")) {

       message.react('884246677245034546');
       message.react('884610892233322496');
    }
  });


client.on('message', message => {
  if(message.content.startsWith('~embed') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
      let removed = message.content.replace('~embed', '')
      let emb = new MessageEmbed()
          .setColor('#000000')
          .setDescription(removed)
      
      message.channel.send(emb);
      message.delete();
  }
});


client.on('message', (message) => {
  if (message.content.includes('discord.gg/'||'discordapp.com/invite/') && !message.guild.member(message.author).hasPermission("MANAGE_CHANNELS") && message.channel.id != '783175753771515904') {
          let badMsg = message.content;
          let badMsgChan = message.guild.channels.cache.get(message.channel.id);
          let badMsgUser = message.author;
          let logChan = message.guild.channels.cache.find(ch => ch.name === "・mods");

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

client.on('presenceUpdate', async (oldPresence, newPresence) => {
    const role = newPresence.guild.roles.cache.get("842135209569681478");
    const member = newPresence.member;
    const channel = client.channels.cache.get('841733954477883408')
    const activities = member.user.presence.activities[0];
    const emb = new MessageEmbed()
          .setColor('#000000')
          .setDescription(`${member} thank you for having our server link in your status!`)
    
    if (activities && (activities.state.includes( ".gg/unsee") || activities.state.includes("discord.gg/unsee" ))) {
             newPresence.member.roles.add(role);
    }
    else {
        if(member.roles.cache.get(role.id)) {
             newPresence.member.roles.remove(role);
        }
         }
});

client.on("messageReactionAdd", (reaction, user) => {

    const message = reaction.message;

    let upvoteLimit = 3;
    
    let funnymessage = message.content;
    let funnyUser = message.author;

    let msg = new Discord.MessageEmbed()
          .setColor('#000000')
          .setAuthor(funnyUser.tag, funnyUser.avatarURL())
          .setDescription(funnymessage)
          .setTimestamp()

    if (message.reactions.cache.some(re => re.emoji.name === 'unseeface' && re.users.cache.has(client.user.id))) {
        return;
    }
    
    if (reaction.emoji.name == "💀" && reaction.count >= upvoteLimit) {
        const chanl = message.guild.channels.cache.find(ch => ch.name === "unseeboard");
        if (message.attachments.size > 0)
        {
            const url = message.attachments.first().url;
            msg.setImage(url);
        }    
        chanl.send(msg);
        message.react('841767978034921492');
    }

});

client.login(process.env.BOT_TOKEN);
