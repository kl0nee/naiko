module.exports = {
	name: "mute",
	aliases: [],
	category: "moderacion",
	owners: false,
	desc: "Silencia a un usuario con su razon",
	usage: "<prefix>mute <mentioned> <time> <reason>",
	execute: async(client, message, args) =>{
        const Discord = require("discord.js")
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de tener el permiso **MANAGE_MESSAGES** para silenciar usuarios de tu servidor`)
        const user = message.mentions.members.first()
        const time = args[1]
        const reason = args.slice(time.length).join(" ")
        const ms = require("ms")
        if(!user) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de mencionar a el usuario que quieres silenciar de tu servidor`)
        if(user.id == message.author.id) return message.channel.send(`${require("../utils/emojis/deny.js")} | No te puedes silenciar a ti mismo`)
        if(!time) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un tiempo definido para mutear a ese usuario de tu servidor`)
        if(`${ms(time)}`.includes("y")) return message.channel.send(`${require("../utils/emojis/deny.js")} | El tiempo no puede ser un año`)
        let muterole;
        if (message.guild.roles.cache.find(x => x.name == "Muted")) {
        muterole = message.guild.roles.cache.find(x => x.name == "Muted").id
        }else{
        const createrol = await message.guild.roles.create({
            data: {
                name: 'Muted',
            },
            permissions: [
            "SEND_MESSAGES"
            ]
        })
        }
        if(user.roles.cache.get(muterole.id)) return message.channel.send(`${require("../utils/emojis/deny.js")} | Ese usuario esta muteado anteriormente`)
        let time2;
        if(time.includes("d")) time2 = `${time.replace("d", "")} dia/s`
        if(time.includes("w")) time2 = `${time.replace("w", "")} semana/s`
        if(time.includes("s")) time2 = `${time.replace("s", "")} segundo/s`
        if(time.includes("m")) time2 = `${time.replace("m", "")} minuto/s`
        const embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setDescription(message.guild.name+"'s modlogs")
        .addField("Usuario:", user)
        .addField("Tipo:", "Muteo")
        .addField("Duracion:", time2)
        .addField("Razon:", reason)
        .setThumbnail(user.user.avatarURL({dynamic: true}))
        message.channel.send(embed)
        user.roles.add(muterole)
        setTimeout(function() {
        user.roles.delete(muterole)
        }, ms(time))

}
}