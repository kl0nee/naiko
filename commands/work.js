module.exports = {
	name: "work",
	aliases: ["trabajar"],
	category: "economia",
	owners: false,
	desc: "Trabaja para obtener dinero",
	usage: "<prefix>work",
	execute: async(client, message, args) =>{
        let math = require("math-expression-evaluator")
        let guildEC = await client.economy.guilds.findOne({guildID: message.guild.id})
        let userEC = await client.economy.users.findOne({guildID: message.guild.id, userID: message.author.id})
	let Discord = require("discord.js")
	let random = Math.floor(Math.random() * guildEC.limitmoney)
        await client.economy.users.updateMany({guildID: message.guild.id, userID: message.author.id, money: random+userEC.money})
        message.channel.send(guildEC.works.works[Math.floor(Math.random() * guildEC.works.works.length)]+" "+guildEC.emojimoney+""+random);
	}
	}