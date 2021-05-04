const Discord = require("discord.js");

const firebase = require("firebase");

const banco = require("../banco.js");
const database = firebase.database();
const ms = require('parse-ms');

exports.run = async (client, message, args) => {

let Timer = await database.ref(`Timer/Usuarios/${message.author.id}`).once('value');

let Dindin = await database.ref(`Economia/Usuarios/${message.author.id}`).once('value');

let timeout = 86400000;
const daily = [
"1980",
"550",
"290",
"492",
"819",
"209",
"629",
"619",
"729"
]

let geraDaily = daily[Math.floor(Math.random() * daily.length)]

  //se nunca pegou o cooldown
if(Timer.val() == null) {
  database.ref(`Timer/Usuarios/${message.author.id}`).set({cooldown: Date.now()})

  //se não tem dinheiro
  if(Dindin.val() == null) {
    database.ref(`Economia/Usuarios/${message.author.id}`).set({money: 1500, banco: 0})
  }

  //se tem dinheiro
  if(Dindin.val() != null) {
    database.ref(`Economia/Usuarios/${message.author.id}`).update({money: Number(Dindin.val().money) + Number(geraDaily)})
    return message.reply(`Parece que esse foi o seu primeiro Daily com cooldown, como recompensa vc ganhou 1500`)
  }
}

//se não tem dinheiro ainda
if(Dindin.val() == null) {
database.ref(`Economia/Usuarios/${message.author.id}`).set({money: 1500, banco: 0})
database.ref(`Timer/Usuarios/${message.author.id}`).set({cooldown: Date.now()})
return message.reply(`Parece que esse foi o seu primeiro daily, como recompensa vc ganhou 1500`)
}

//se não coletou o daily
if(Timer.val().cooldown !== null && timeout - (Date.now() - Timer.val().cooldown) < 0) {
database.ref(`Timer/Usuarios/${message.author.id}`).update({cooldown: Date.now()})
database.ref(`Economia/Usuarios/${message.author.id}`).update({money: Number(Dindin.val().money) + Number(geraDaily)});
return message.reply(`Você coletou seu Daily agora e recebeu: **${geraDaily} coins**`)
}

//se já pegou o daily
if(Timer.val().cooldown !== null && timeout - (Date.now() - Timer.val().cooldown) > 0) {
let time = ms(timeout - (Date.now() - Timer.val().cooldown));
return message.channel.send(`**Você ja coletou seu Daily hoje, volte em ${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`)
}
}