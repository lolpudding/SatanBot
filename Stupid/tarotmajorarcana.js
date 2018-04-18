const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
	
	let question = args.join(" ").slice(0);
	if(!question)return message.channel.send("Ask a question! **(No 'Yes or No' questions or broad questions)**");
	
	let {body} = await superagent
	.get(`https://tarot.howlcode.com/spreads/random_card`);
	
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.setTitle(`☽ ${body[0].name} ☾`)
	.setImage(body[0].face_image_url)
	.setDescription(body[0].full_meaning)
	.addField("☽ Short meaning ☾", body[0].short_meaning)
	.addField("☽ Up meaning ☾", body[0].up)
	.addField("☽ Reverse meaning ☾", body[0].reverse)
	.addField("☽ Question ☾", question)
	.setFooter("☽ Major Arcana Cards ☾", message.author.displayAvatarURL);

	message.channel.send(messageSend);
	return;
	
}

module.exports.help = {
		name: "TarotMajorArcana"
}