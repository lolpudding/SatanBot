const Discord = require("discord.js");
const fs = require("fs");
let xp = require("./xp.json");

module.exports.run = async(bot, message, args) => {
	
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.setAuthor("☽ Updates ☾")
	.setTitle("*Update V0.85*")
	.addField("⚸ Minor Updates", "More lines to screech at users for swearing in the safe server. Only one new word added to the swear list.")
	.setFooter("☽ Thank you for following the development of SatanBot ☾", message.author.displayAvatarURL);
	
	message.channel.send(messageSend);
	return;
}

module.exports.help = {
		name: "Update"
}
