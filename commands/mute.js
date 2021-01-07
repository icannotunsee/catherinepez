client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

switch (args[0]) {
    case 'mute':
        var wanted  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        if(!wanted) return  message.reply(wanted + " is not in this kingdom.)

        let travelersrole = message.guild.roles.find(role => role.name === "travelers");
        let muterole = message.guild.roles.find(role => role.name === "prisoners");


        if(!muterole) return message.reply("i can't find the mute role i-")


        let time = args[2];
        if(!time){
            return message.reply("you didn't tell me how long the mute should be.");
        }

        wanted.removeRole(travelersrole.id)
        wanted.addRole(muterole.id);


        message.channel.send(`@${wanted.user.tag} got put in prison for ${ms(ms(time))}.`)

        setTimeout(function(){

            wanted.addRole(travelersrole.id)
            wanted.removeRole(muterole.id);
            console.log(muterole.id)
            message.channel.send(`@${wanted.user.tag} has been released.`)
        }, ms(time));

    break;
}

});
