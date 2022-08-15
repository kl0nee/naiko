module.exports = {
 name: "emoji",
 aliases: [],
 category: "informacion",
 owners: false,
 desc: "Obtiene la informacion de tal emoji",
 usage: "<prefix>emoji <emojiname || emojiidentifier>",
 execute: async(client, message, args) =>{
 let moment = require("moment")
 require("moment-duration-format");
 if(!args[0]) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un texto`)
 let emoji = message.guild.emojis.cache.find(q => q.name == args[0])
 if(!emoji) return message.channel.send(`${require("../utils/emojis/deny.js")} | Ese emoji no esta en el servidor`)
 let emojiId = `<${emoji.identifier}>`
 let embed = new (require("discord.js")).MessageEmbed()
 .setColor(client.color)
 .setThumbnail(emoji.url)
 .setDescription("Informacion del emoji:", emoji.name)
 .addField(":bust_in_silhouette: | ID:", emoji.id)
 .addField(":book: | Identificacion:", "`<"+emoji.identifier+">`")
 .addField(":speech_left: | ¿Animado?:", emoji.animated ? "Si" : "No")
 .addField(":speech_balloon: | ¿Eliminado?:", emoji.deleted ? "Si" : "No")
 message.channel.send(embed)
 }
 }