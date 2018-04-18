const Discord = require("discord.js");
const Kaori = require('kaori');
const kaori = new Kaori();

module.exports.run = async(bot, message, args) => {
		
		let search = args.join(" ").slice(0);
		
		let msgLead = await message.channel.send("Loading Image...")
		
		await kaori.search('safebooru', { tags: [`${search}`], limit: 1, random: true })
		.then(images => message.channel.send(images[0].common.fileURL))
		.catch(err => message.channel.send("Image not found"));
		
		msgLead.delete();
		
		return;
}

module.exports.help = {
		name: "KaoriTest"
}