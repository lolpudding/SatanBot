const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
	let messageArray = message.content.split(" ");
	let serverID = messageArray[1];
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot set a safe server to waste my time.");
	if(!serverID) return message.channel.send("Please type in the server ID number after the command. Usage is satan!SetSafeServer (channel id number here)");
	
	let currentSafeServerID = JSON.parse(fs.readFileSync("./Stupid/safeserverid.json", "utf8"));
	
	currentSafeServerID[message.guild.id] = {
			currentSafeServerID: serverID
	};
	
	fs.writeFile("./Stupid/safeserverid.json", JSON.stringify(currentSafeServerID), (err) => {
		if (err) console.log(err)
	});
	
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.addField(`You have set a safe server`, `Server set: ${serverID}`)
	.addField("NOTE", "You can only have up to **1** save server")
	.addField("How to disable", "Use satan!SetSafeServer but type in 0 instead");
	
	return message.channel.send(messageSend);
}

module.exports.help = {
		name: "SetSafeServer"
}