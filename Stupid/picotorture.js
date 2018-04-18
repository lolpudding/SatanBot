const Discord = require("discord.js");
const ms = require("ms");
const Kaori = require('kaori');
const kaori = new Kaori();

module.exports.run = async(bot, message, args) => {
	
	let eUser = message.guild.member(message.mentions.users.first());
	if(!eUser)return message.channel.send("Please tag someone to mute");
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot mute anyone, *assbutt*.");
	//if(eUser.hasPermission('ADMINISTRATOR')) return message.channel.send("You cannot mute an admin you inconsiderate piece of shit.");
	
	let muterole = message.guild.roles.find(`name`, "prisoner");
	let jailcell = message.guild.channels.find(`name`, "dungeon");
	
	if(!muterole){
		try{
			muterole = await message.guild.createRole({
			name: "prisoner",
			color: "#000000",
			permissions:[]
			})
			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(muterole, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false,
					READ_MESSAGES: false
				});
			});
		}catch(e){
			console.log(e.stack);
		}
	}
	
	if(!jailcell){
		jailcell = message.guild.createChannel("dungeon", 'text')
		.then(channel => {
			channel.overwritePermissions(muterole, {"READ_MESSAGES": true});
			return message.reply("A new server has been created");
		});
	}
	
	let mutetime = args[1];
	if(!mutetime) return message.reply("You didn't specify a time such as 10h or 2m");
	
	await(eUser.addRole(muterole.id));
	message.channel.send(`${eUser} has been muted`);
	
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.addField("⚸ Pico Torture Time", "You were locked away in a dungeon")
	.addField("⚸ Now what?", "Think about what you fucking did and why you were here in the first place. Then realise it was probably a shitty thing to do and that you need to re-evaluate your life.");
	
	let jailcellSend = message.guild.channels.find(`name`, "dungeon");
	jailcellSend.send(messageSend);
	
	setTimeout(function(){
		eUser.removeRole(muterole.id);
		message.channel.send(`${eUser} is unmuted`);
	}, ms(mutetime));
	
	let spamMessage = 0;
	for(var i = 0; i < 20; i++){
		kaori.search('r34', { tags: [`boku_no_pico`], limit: 1, random: true })
		.then(images => jailcellSend.send(images[0].common.fileURL))
		.catch(err => jailcellSend.send("Image not found"));
	}
}

module.exports.help = {
		name: "PicoTorture"
}