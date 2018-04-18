const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
	
	let sign = args[0];
	let time = args[1];
	
	if(!sign) return message.channel.send("Type type in a zodiac sign!");
	if(!time) return message.channel.send("Type type in a time! Current times are : today, week, month, and year");
	
	let {body} = await superagent
	.get(`http://horoscope-api.herokuapp.com/horoscope/${time}/${sign}`);
	
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.setTitle(`☽ Horoscope ☾`)
	.setDescription(body.horoscope)
	.setFooter(`☽ ${sign} ☾`, message.author.displayAvatarURL);

	message.channel.send(messageSend);
	return;
	
}

module.exports.help = {
		name: "Horoscope"
}