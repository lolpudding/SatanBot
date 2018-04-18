const botconfig = require("./config.json");
const saveserver = require("./Stupid/safeserverid.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

let xp = require("./Stupid/xp.json");

fs.readdir("./Stupid/", (err, files) => {
	if(err) console.log(err);
	
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0){
			console.log("No commands found");
			return;
	}
	
	jsfile.forEach((f, i) =>{
		let props = require(`./Stupid/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
	
});

bot.on("ready", async () =>{
	console.log('($bot.user.username) is online!');
	bot.user.setActivity("The Sims 3");
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let messageLength = messageArray.length;
	let args = messageArray.slice(1);
	
	let currentSafeServerID = JSON.parse(fs.readFileSync("./Stupid/safeserverid.json", "utf8"));
	if(!currentSafeServerID[message.guild.id]){
		currentSafeServerID[message.guild.id] = {
			currentSafeServerID: "0"
		};
	}
	let serverIDcheck = currentSafeServerID[message.guild.id].currentSafeServerID;

	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if(commandfile) commandfile.run(bot, message, args);
	
	if(cmd === `${prefix}Hello`){
		return message.channel.send("Hello!");
	}
	
	if(cmd === `${prefix}YouSoFuckingPrecious`){
		return message.channel.send("When you smile");
	}
	
	//----------------------------------------------------------------------------------------------------------------
	//---------------------------Soul System below--------------------------------------------------------------------
	//----------------------------------------------------------------------------------------------------------------
	
	let xpAdd = 0;
	for(var i = 0; i < messageLength; i++){
		xpAdd+=1;
	}
	//console.log(xpAdd * 3);
	
	if(!xp[message.author.id]){
		xp[message.author.id] = {
				xp: 0,
				level: 0
		};
	}
	
	let currXp = xp[message.author.id].xp;
	let currLevel = xp[message.author.id].level;
	xp[message.author.id].xp = currXp + xpAdd * 3;
	//let nxtLvl = xp[message.author.id].level * 0;
	if(666 <= xp[message.author.id].xp){
		xp[message.author.id].level = currLevel + 1;
		message.channel.send(`${message.author} earned a soul!`);
		xp[message.author.id].xp = 0;
		fs.writeFile("./Stupid/xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err)
		});
	}
	
	//----------------------------------------------------------------------------------------------------------------
	//---------------------------Safe Server Utilities below----------------------------------------------------------
	//----------------------------------------------------------------------------------------------------------------
	
	if(cmd === `${prefix}CurrentSafeServer`){
		let messageChannelID = message.channel.id;
		
		let messageSend = new Discord.RichEmbed()
		.setColor("#ff0707")
		.addField("Current Safe Server ID number", `${serverIDcheck}`)
		.addField("This channel's ID number ", `${messageChannelID}`)
		.addField("How to enable", "In order to set this up, enable Discord Developer mode on and right click any text channel's to copy it's ID. Then use satan!SetSafeServer");
		return message.channel.send(messageSend);
	}
	
	for(var i = 0; i < messageLength; i++){
		if(messageArray[i] === `fuck` || messageArray[i] === `FUCK`){
			if(message.channel.id == serverIDcheck){
			return message.channel.send("THIS IS A CHRISTIAN MINECRAFT SERVER NO PROFANITY");
			}
		}
	}
	
	for(var i = 0; i < messageLength; i++){
		if(messageArray[i] === `shit` || messageArray[i] === `SHIT`){
			if(message.channel.id == serverIDcheck){
			return message.channel.send("THIS IS A CHRISTIAN MINECRAFT SERVER NO PROFANITY");
			}
		}
	}
	
});

bot.login(botconfig.token);
//bot.login(process.env.BOT_TOKEN);