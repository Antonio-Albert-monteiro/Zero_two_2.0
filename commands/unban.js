const Discord = require('discord.js')

//desbane um user (by ferinha)

exports.run = async(client, message, args) => {
    let user = args[0];
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author} Você precisa da permissão **BANIR MEMBROS** para utilizar este comando!`);
    
    if (!user) return message.channel.send(`${message.author} Utilize o ID de alguém para desbanir!`);
    message.guild.members.unban(user);
    
   message.channel.send(`${message.author}, o usuário <@${user}> (\`${user}\`) foi desbanido com sucesso!`)
}