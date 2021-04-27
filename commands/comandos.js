const Discord = require('discord.js');
const moment = require("moment");

exports.run = async (client, message, args) => {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let uptime = `${days.toFixed()} dias, ${hours.toFixed()}:${minutes.toFixed()}:${seconds.toFixed()}`;

	let embed = new Discord.MessageEmbed()
		.setTitle('Central de comandos')
		.setDescription(
			`diga de qual tipo de comandos você estar precisando de ajuda:
     🛠 Moderação
     💰 Economia
     🔍 info
     😂 Diversão
     `)
		.setColor('#FF0077');
	message.channel.send(embed).then(msg => {
		msg.react('🛠');
		msg.react('💰');
		msg.react('🔍');
		msg.react('😂');
		
		let filtro1 = (r, u) => r.emoji.name === '🛠' && u.id === message.author.id;
		let filtro2 = (r, u) => r.emoji.name === '💰' && u.id === message.author.id;
		let filtro3 = (r, u) => r.emoji.name === '🔍' && u.id === message.author.id;
		let filtro4 = (r, u) => r.emoji.name === '😂' && u.id === message.author.id;

		let coletor = msg.createReactionCollector(filtro1);
		let coletor1 = msg.createReactionCollector(filtro2);
		let coletor2 = msg.createReactionCollector(filtro3);
		let coletor3 = msg.createReactionCollector(filtro4);

		coletor.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle(`Central de comandos`)
				.setDescription('Moderação')
				.addFields(
            { name: 'Ban', value: 'Bani um usuario' },
            { name: 'Kick', value: 'kicka um usuario para fora do server' },
            { name: 'Lock', value: 'fecha um canal' },
            { name: 'Unlock', value: 'abri devolta um canal' },
            { name: 'Clear', value: 'apaga mensagens do chat' }
				)
				.setColor('#FF0077');

			msg.edit(embed);
		});

		coletor1.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle('Economia')
				.addFields(
				    { name: 'daily', value: 'em desemvolvimento' },
				    { name: 'work', value: 'em desemvolvimento' },
				    { name: 'pay', value: 'em desemvolvimento' },
				    { name: 'dep all', value: 'em desemvolvimento' },
				    { name: 'saldo', value: 'em desemvolvimento' },
				{ name: 'loja', value: 'em desemvolvimento' }
				)
				.setColor('#FF0077');

			msg.edit(embed);
		});
		
		coletor2.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle('info')
				.addFields(
				    { name: 'Ajuda', value: 'peça ajuda' },
				    { name: 'Comandos', value: 'mostra a minha lista de comandos' },
				    { name: 'Uptime', value: 'diz a quanto tempo estou acordada' },
				    { name: 'ping', value: 'mostra o meu ping' },
				    { name: 'Serveinfo', value: 'mostra informações atuais do server' },
				    { name: 'Userinfo', value: 'mostra informações do usuario' },
				    { name: 'Invite', value: 'mostra o link para vc me adicionar no seu server' },
				    { name: 'Ideia', value: 'de uma sugestão para o server' }
				)
				.setColor('#FF0077');

			msg.edit(embed);
		});
		
		coletor3.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle('Diversão')
				.addFields(
				    { name: 'Avatar', value: 'mostra o avatar do usuario' },
				    { name: 'Clima', value: 'mostra o clima da sua região' },
				    { name: 'Coinflip', value: 'cara ou coro' },
				    { name: 'Covid', value: 'mostra o status da covid-19 pelo mundo' },
				    { name: 'Emoji', value: 'mostra o id do emoji' },
				    { name: 'Kiss', value: 'beija um usuario' },
				    { name: 'translate', value: 'faça traduções' }
				)
				.setColor('#FF0077');

			msg.edit(embed);
		});
	});
}