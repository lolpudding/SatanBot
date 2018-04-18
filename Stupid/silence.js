const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {
	
	let eUser = message.guild.member(message.mentions.users.first());
	if(!eUser)return message.channel.send("Please tag someone to mute");
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot mute anyone, *assbutt*.");
	if(eUser.hasPermission('ADMINISTRATOR')) return message.channel.send("You cannot mute an admin you inconsiderate piece of shit.");
	
	let muterole = message.guild.roles.find(`name`, "muted");
	if(!muterole){
		try{
			muterole = await message.guild.createRole({
			name: "muted",
			color: "#000000",
			permissions:[]
			})
			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(muterole, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false
				});
			});
		}catch(e){
			console.log(e.stack);
		}
	}
	
	let mutetime = args[1];
	if(!mutetime) return message.reply("You didn't specify a time such as 10h or 2m");
	
	await(eUser.addRole(muterole.id));
	message.channel.send(`${eUser} has been muted`);
	
	setTimeout(function(){
		eUser.removeRole(muterole.id);
		message.channel.send(`${eUser} is unmuted`);
	}, ms(mutetime));
}

module.exports.help = {
		name: "Silence"
}