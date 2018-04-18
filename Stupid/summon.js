const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	let wish = args.join(" ").slice(0);
	if(!wish)return message.channel.send("Who dares to summon me? For what? (Please enter your wish after 'satan!Summon' or type 'satan!Help' if you need help)");
	
	let taskList = [
	"Stitch your mouth",
	"Sell your soul",
	"Sacrifice yourself"
	];
	
	let timePick = Math.floor((Math.random() * 12));
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.addField(`You have summoned ${bot.user.username}`, `${message.author} has asked for ${wish}`)
	.addField("Hours to redeem wish", timePick);
	
	return message.channel.send(messageSend);
}

module.exports.help = {
		name: "Summon"
}