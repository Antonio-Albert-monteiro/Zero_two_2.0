const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let avatar = client.user.displayAvatarURL({ format: 'png'})
    let help = new Discord.MessageEmbed()
    .setTitle("Precissando de ajuda?")
    .setColor('#8A2BE2')
    .setThumbnail(avatar)
    .setTimestamp()
    .setFooter(`executado por: ${message.author.username}`)
    .setDescription(
        `Olá ${message.author}, o meu nome é  Two e eu sou apenas um simples bot para o discord, com o objetivo é de te fazer feliz, deixar o seu server mas bonito e seguro \n ⠀⠀⠀⠀⠀⠀⠀⠀
    `)
    .addFields(
        { name: "🎮Comandos:", value: `para saber mas sobre os meu comandos ultilize o comando: \`comandos\`` },
        { name: "❓Bot-info:", value: `para saber algumas informações minhas ultilize o comando: \`botinfo\`` },
        { name: "🛠Suporte:", value: `aqui estar o link para o meu servidor de suporte [Suporte](https://discord.gg/cQ7B7X4uVW)` },
        { name: "✉Invite:", value: `aqui estar o meu link de invite [Invite](https://discord.com/oauth2/authorize?client_id=822903328995803177&scope=bot&permissions=8)` }
    )
    message.channel.send(help)
}