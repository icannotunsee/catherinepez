client.on('message', message => {
  let args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
    case 'embed':
       var emb = new MessageEmbed()
          .setColor('#FFBCC9')
          .setDescription(message)
      
       message.channel.send(emb);
       message.delete();
  }
});
