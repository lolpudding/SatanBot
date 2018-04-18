const Discord = require("discord.js");
const fs = require("fs");
let xp = require("./xp.json");

module.exports.run = async(bot, message, args) => {
	
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.setAuthor("☽ Updates ☾")
	.setTitle("*Update V0.80*")
	//.addField("⚸ **Now Hosted on Heroku**", "I will now run for very long periods of time without turning off. If I do, its because I have run out of hours in Heroku>")
	.addField("⚸ New Command", "Timeout - Usage: satan!Timeout (username here) (time here EX: 10s, 5m, 10h). Used to lock person into a text channel temorarily.")
	//.addField("⚸ New Command", "PicoTorute - Same as Timeout, but spams Boku No Pico images in the dungeon. *Not for the faint of heart.*")
	.addField("⚸ New Command", "TarotMajorArcana - Have a question and get t answered through a tarot card. No 'yes or no questions' or overly broad question if you want this to work. (Only Major Arcana)")
	.addField("⚸ New Command", "TarotAllCards - Same as TarotMajorArcana, but uses all cards in the deck.")
	.addField("⚸ New Command", "Horoscope - You can now check your horoscope! Usage 'satan!Horoscope (zodiac here) (today, week, month, or year)'")
	.addField("☽ **NOTICE** ☾", "Voice Chat torture was originally going to be implemented but decided it was a bad idea so ._.**")
	.setFooter("☽ Thank you for following the development of SatanBot ☾", message.author.displayAvatarURL);
	
	message.channel.send(messageSend);
	return;
}

module.exports.help = {
		name: "Update"
}