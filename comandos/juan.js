module.exports = {
	name: "juan",
	aliases: ["iamjuan"],
	category: "No tiene",
	owners: false,
	desc: "Comando de Juan!",
	usage: "<prefix>juan",
	execute: async(client, message, args) =>{
		let Discord = require("discord.js")
		let embed = new Discord.MessageEmbed()
.setDescription("**El mejor desarrollador del universo.... Juan!**")
.setImage(client.users.cache.get("654387658734436364").avatarURL())
.setColor(client.color)
message.channel.send(embed)
	}
}