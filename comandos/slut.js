module.exports = {
	name: "slut",
	aliases: ["prostituir"],
	category: "economia",
	owners: false,
	desc: "Prostituite para obtener dinero",
	usage: "<prefix>slut",
	execute: async(client, message, args) =>{
        let math = require("math-expression-evaluator")
        let guildEC = await client.economy.guilds.findOne({guildID: message.guild.id})
        let userEC = await client.economy.users.findOne({guildID: message.guild.id, userID: message.author.id})
	let Discord = require("discord.js")
	let random = Math.floor(Math.random() * guildEC.limitmoney)
        if(random > 150) {
        await client.economy.users.updateMany({guildID: message.guild.id, userID: message.author.id, money: userEC.money-random})
        return message.channel.send(`${guildEC.works.slut2} ${guildEC.emojimoney} -${random}`)
        }
        await client.economy.users.updateMany({guildID: message.guild.id, userID: message.author.id, money: random+userEC.money})
        message.channel.send(guildEC.works.slut1[Math.floor(Math.random() * guildEC.works.slut1.length)]+" "+guildEC.emojimoney+""+random);
	}
	}