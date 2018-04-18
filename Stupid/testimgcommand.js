const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	/*
	let messageSend = new Discord.RichEmbed()
	.setColor("#ff0707")
	.addField(`Test Image Send`, sendFile("./Stupid/test.jpg");
	*/
	
	message.channel.send({
		files: [
                "./Stupid/img/test.jpg"
            ]
	});
	
	message.channel.send("https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.50.800.800/20634748_778314672342656_5637870210724659200_n.jpg?ig_cache_key=MTU3ODYwNjc5MDcxMzY0MDk1NQ%3D%3D.2.c");
	
	//return message.channel.send(messageSend);
}

module.exports.help = {
		name: "ImageTest"
}