const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {
    let server = message.guild;
    let serverIcon = message.guild.iconURL();
    let bots = server.members.cache.filter(m => m.user.bot).size;
    let humans = server.members.cache.filter(m => m.user.bot).size;
    let total = bots + humans;
    
    let guildName = server.name;
    let guildId = server.id;
    let owner = server.owner;
    let ownerId = server.ownerID;
    let create = server.createdAt.toLocaleString('pt-BR');
    let levelVerification = server.verificationLevel;
    let totalMember = total
    let channelText = server.channels.cache.filter(chan => chan.type === 'text').size;
    let channelVoice = server.channels.cache.filter(chan => chan.type === 'voice').size;
    let channelCategory = server.channels.cache.filter(chan => chan.type === 'category').size;
    let join = server.joinedAt.toLocaleString('pt-BR');
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Status do server: ${guildName}`)
    .setColor('#8A2BE2')
    .setThumbnail(`${serverIcon}`)
    .setFooter(` • Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    .addFields(
        { name: "🔠 Nome:", value: `${guildName}` },
        { name: "📆 Id:", value: `${guildId}` },
        { name: "👑 Proprietário(a):", value: `${owner}` },
        { name: "👑 Id do dono:", value: `${ownerId}` },
        { name: "📆 Criado em:", value: `${create}` },
        { name: "🔐 Nível de verificação do servidor:", value: `${levelVerification}` },
        { name: "👥 Total de Membros:", value: `${total}` },
        { name: "⌨ Canais de Texto:", value: `${channelText}` },
        { name: "🎤 Canais de Voz:", value: `${channelVoice}` },
        { name: "📜 Cartegorias:", value: `${channelCategory}` },
        { name: "📆 Você entrou em:", value: `${join}` }
    )
    message.channel.send(embed);

   message.delete();
}