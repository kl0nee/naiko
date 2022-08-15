module.exports = {
  name: "crime",
  aliases: ['crimen'],
  category: "economia",
  owners: false,
  desc: "Comete un crimen",
  usage: "<prefix>crime",
  execute: async (client, message, args) => {
        let guildEC = await client.economy.guilds.findOne({guildID: message.guild.id})
        let userEC = await client.economy.users.findOne({guildID: message.guild.id, userID: message.author.id})
        let math = require("math-expression-evaluator")
	let Discord = require("discord.js")
	let random = Math.floor(Math.random() * guildEC.limitmoney)
        if(random > 144) {
        let yotra2 = await client.economy.users.findOne({guildID: message.guild.id, userID: message.author.id})
        await client.economy.users.updateMany({guildID: message.guild.id, userID: message.author.id, money: userEC.money-random})
        return message.channel.send(`${guildEC.works.crime} ${guildEC.emojimoney} -${random}`)
        }
        await client.economy.users.updateMany({guildID: message.guild.id, userID: message.author.id, money: random+userEC.money})
        message.channel.send(guildEC.works.crimes1[Math.floor(Math.random() * guildEC.works.crimes1.length)]+" "+guildEC.emojimoney+""+random);
  }
}