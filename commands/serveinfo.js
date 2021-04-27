const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {
    let bots = `${message.guild.members.cache.filter(m => m.user.bot).size}`
    let humans = `${message.guild.memberCount}`
    let total = bots + humans;
    let serverIcon = message.guild.iconURL();


    let serverembed = new Discord.MessageEmbed() 
    .setColor("#8A2BE2")
    .setThumbnail(`${serverIcon}`)
    .setTitle(message.guild.name + ` Server Stats`)
    .addFields(
        { name: "🔠 Nome:", value: `${message.guild.name}` },
        { name: "📆 Id:", value: `${message.guild.id}` },
        { name: "👑 Proprietário(a):", value: `<@${message.guild.ownerID}>` },
        { name: "👑 Id do dono:", value: `${message}` },
        { name: "📆 Criado em:", value: `${message.guild.creatdAt}` },
        { name: "🔐 Nível de verificação do servidor:", value: `${message.guild.verficationLevel}` },
        { name: "👥 Total de Membros:", value: `Total de membros: ${total} \n Total de bots: ${bots} \n Total de humanos: ${humans}` },
        { name: "⌨ Canais de Texto:", value: `${message.guild.channels.cache.filter(chan => chan.type === 'text').size}` },
        { name: "🎤 Canais de Voz:", value: `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size}` },
        { name: "📜 Cartegorias", value: `${message.guild.channels.cache.filter(chan => chan.type === 'category').size}` },
        { name: "📆 Você entrou em:", value: `${message.member.joinedAt}` }
    )
    /*.addField("🔠 Nome:", message.guild.name, )
    .addField("🆔 Id:, message.guild.id, )
    .addField(`👑 Server Owner:`, `<@${message.guild.ownerID}>`, true)
    .addField(`👑 Server Owner ID:`, message.guild.ownerID, true)
    .addField('📆 Server Criado em:', message.guild.createdAt, true)
    .addField(`🔐 Server Verification Level:`, message.guild.verificationLevel, true)
    .addField('👥 Membros:', `${message.guild.memberCount}`)
    .addField('⌨ Canais de texto:', `${message.guild.channels.cache.filter(chan => chan.type === 'text').size} `)
    .addField('🎤 Canais de voz:', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size}`)
    .addField('📜 Cartegorias:', `${message.guild.channels.cache.filter(chan => chan.type === 'category').size}`)
    .addField("📥 Você Entrou em:", message.member.joinedAt)
    .setFooter(` • Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    */
    
    message.channel.send(serverembed);

   message.delete();
}