const { MessageEmbed } = require('discord.js');

exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let status;
    /*switch (user.presence.status) {
        case "online":
            status = "online";
            break;
        case "dnd":
            status = "AFK";
            break;
        case "idle":
            status = "Soneca";
            break;
        case "offline":
            status = "offline";
            break;
        }
        */
        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} Info`)
            .setColor(`#8A2BE2`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "🔠 Nick: ",
                    value: user.user.username,
                },
                {
                    name: "smzmszm #️Hashtag: ",
                    value: `#${user.user.discriminator}`,
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: "📡 Status: ",
                    value: user.presence.status,
                },
                {
                    name: "🕹 Atividade: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `O usuário não está fazendo nada!`,
                },
                {
                    name: '👤 Avatar : ',
                    value: `[Clique Aqui!](${user.user.displayAvatarURL()})`
                },
                {
                    name: '📆 Conta criada em: ',
                    value: user.user.createdAt.toLocaleDateString("pt-BR"),
                },
                {
                    name: '📆 Entrou em: ',
                    value: user.joinedAt.toLocaleDateString("pt-BR"),
                },
                {
                    name: '🛠 Cargos: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                }
            )
            await message.channel.send(embed)
}