const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(message.author.id != "675531712180256801") return message.channel.send(`${message.author}, desculpe mas o comando está restrito para apenas os meus desenvolvedores`)
     
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};