const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
		let eUser = message.guild.member(message.mentions.users.first());
		if(!eUser)return message.channel.send("Pleae tag someone to execute");
		
		if(eUser.hasPermission('ADMINISTRATOR')) return message.channel.send("You cannot execute an admin you stupid fucker.");
		
		let executionName = [
		//Danganronpa V1 executions
		"Blast Off!",
		"Spear of Gungnir",
		"The 1,000 Blows",
		"The Cage of Death",
		"The Burning of the Versailles Witch",
		//Alter Ego execution
		//Kyoko Kigiri or Makoto Naegi Execution
		//Junko Enoshima execution
		
		//Danganronpa V2 executions
		//Not implemented yet ;(
		
		//Danganronpa V3 executions
		"Der Flohwalzer",
		"Strand of Agony",
		"Wild West Insecticide"
		]
		
		let executions = [
		//Danganronpa V1 executions
		"https://www.youtube.com/watch?v=fuScHV4ccFA",
		"https://www.youtube.com/watch?v=y3cDPycMA4A",
		"https://www.youtube.com/watch?v=0gPeD3_4Oj4",
		"https://www.youtube.com/watch?v=P10iKVvh_jk",
		"https://www.youtube.com/watch?v=I8ynirdsev8",
		
		//Danganronpa V3 executions
		"https://www.youtube.com/watch?v=NaQgusb6uKQ",
		"https://www.youtube.com/watch?v=QHtunawZpEg&t=9s",
		"https://www.youtube.com/watch?v=-iVe_vHR_Q4"
		]
		
		let executionPick = Math.floor((Math.random() * executions.length));
		let messageSend = new Discord.RichEmbed()
		.setColor("#ff0707")
		.addField("Someone has been executed!", `${message.author} has executed ${eUser}`)
		.addField("Execution", executionName[executionPick]);
		
		//executions[executionPick]
		message.channel.send(messageSend);
		message.channel.send(executions[executionPick]);
		return;
}

module.exports.help = {
		name: "Execute"
}