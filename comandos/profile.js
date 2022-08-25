module.exports = {
	name: "profile",
	aliases: ["p", "perfil"],
	category: "informacion",
	owners: false,
	desc: "Hecha un vistazo a tu perfil",
	usage: "<prefix>profile || <user>",
	execute: async(client, message, args) =>{
        let Discord = require("discord.js")
        let profile = require("../utils/models/profile.js")
        let jugador = await profile.findOne({userID: message.author.id})
        let embed = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL(), message.author)
        .setTitle("Perfil de "+ profile.findOne({userID: message.author.id}).name)
        .setDescription("Jugador "+ jugador)
        message.channel.send(embed)
        }
}