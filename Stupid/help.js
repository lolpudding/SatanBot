const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	
		let messageSend = new Discord.RichEmbed()
		.setColor("#ff0707")
		.addField("Hello! My name is Tobias!", "I am also known as Satan. I am a bot created by the almighty Trashpedia. I am based off of a webcomic series called The Misadventures of Tobias and Guy. Feel free to check them out")
		.addField("What version are you on?", "Version 0.50")
		.addField("Command List", "Help, Summon**(WIP)**, Execute**(WIP)**, YouSoFuckinPrecious, Souls**(WIP)**, Update, TarotMajorArcana, Horoscope, TarotAllCards")
		.addField("Admin Command List", "SetSafeServer, KickExecute, Silence, Timeout")
		.addField("What is the Summon command?", "The summon command is used for many neat features. For example, make enough wishes and you can earn special abilities! *Currently WIP*");
		
		message.channel.send(messageSend);
		return;
}

module.exports.help = {
		name: "Help"
}