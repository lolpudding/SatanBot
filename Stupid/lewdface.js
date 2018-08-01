const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
	
  let image = [
  "https://cdn.glitch.com/36f03320-93bc-427d-b121-5a7cd17716b1%2F70fb42f4bc338ff98801e17eda9172bf.jpg?1533172823534",
  "https://cdn.glitch.com/36f03320-93bc-427d-b121-5a7cd17716b1%2F6a321ecdc7b02008503a2bbc9773e24c.jpg?1533172824475",
  "https://cdn.glitch.com/36f03320-93bc-427d-b121-5a7cd17716b1%2Fbee62963b410bb0a232d0e03a460d6f74b9b9555r1-450-319v2_00.jpg?1533172825821"
  ]
  
	message.channel.send(image);
	return;
}

module.exports.help = {
		name: "Lewdface"
}
