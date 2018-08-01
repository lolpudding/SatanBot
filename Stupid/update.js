const Discord = require("discord.js");
const fs = require("fs");
let xp = require("./xp.json");

module.exports.run = async(bot, message, args) => {
	
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.setAuthor("☽ Updates ☾")
	.setTitle("*Update V0.87*")
	.addField("⚸ New Command - Lewdface", "Now with hentai faces! Ugggh I've been so lazy to do anything lately....T_T")
	.setFooter("☽ Thank you for following the development of SatanBot ☾", message.author.displayAvatarURL);
	
	message.channel.send(messageSend);
	return;
}

module.exports.help = {
		name: "Update"
}
