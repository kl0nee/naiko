module.exports = {
	name: "balance",
	aliases: ["bal"],
	category: "economia",
	owners: false,
	cooldown: 10,
	desc: "Observa tu billetera la plata que tienes en la tarjeta y en el banco, tambien puedes saber el total de plata que tienes",
	usage: "<prefix>balance",
	execute: async(client, message, args) =>{
	let Discord = require("discord.js")
	let guildEC = await client.economy.guilds.findOne({guildID: message.guild.id})
        let user = message.mentions.members.first() || message.member;
        let userEC = await client.economy.users.findOne({guildID: message.guild.id, userID: user.id})
        const embed = new Discord.MessageEmbed()
        .setThumbnail(user.user.avatarURL({dynamic: true}))
        .addField('Dinero total:', userEC.money)
        .addField('Dinero del banco:', userEC.bank)
        .setColor(client.color)
        message.channel.send(embed)
}
}