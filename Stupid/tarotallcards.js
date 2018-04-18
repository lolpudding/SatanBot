const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
	
	let question = args.join(" ").slice(0);
	if(!question)return message.channel.send("Ask a question! **(No 'Yes or No' questions or broad questions)**");
	
	let {body} = await superagent
	.get(`https://rws-cards-api.herokuapp.com/api/v1/cards/random`);
	
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.setTitle(`☽ ${body.cards[0].name} ☾`)
	.setDescription(body.cards[0].desc)
	.addField("☽ Up meaning ☾", body.cards[0].meaning_up)
	.addField("☽ Reverse meaning ☾", body.cards[0].meaning_rev)
	.addField("☽ Question ☾", question)
	.addField("☽ Card Type ☾", body.cards[0].type, true)
	.addField("☽ Number ☾", body.cards[0].value_int, true)
	.setFooter("☽ Tarot Cards ☾", message.author.displayAvatarURL);

	message.channel.send(messageSend);
	return;
	
}

module.exports.help = {
		name: "TarotAllCards"
}