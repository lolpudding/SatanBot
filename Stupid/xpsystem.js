const Discord = require("discord.js");
const fs = require("fs");
let xp = require("./xp.json");

module.exports.run = async(bot, message, args) => {
	
	if(!xp[message.author.id]){
		xp[message.author.id] = {
				xp: 0,
				level: 0
		};
	}
	
	let currXp = xp[message.author.id].xp;
	let currLevel = xp[message.author.id].level;
	let difference = 666 - currXp;
	
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.setAuthor(`☽ ${message.author.username} ☾`)
	//.setAuthor(message.author.username)
	.addField("⚸ Souls Owned", `${currLevel}`)
	.addField("⚸ XP", `${currXp} out of 666`)
	.addField("⚸ Crystals", "*Possibly Coming Soon*")
	.addField("⚸ Sigils", "*Possibly Coming Soon*")
	.setFooter(`${difference} XP until next soul`, message.author.displayAvatarURL);
	
	message.channel.send(messageSend);
	return;
}

module.exports.help = {
		name: "Souls"
}