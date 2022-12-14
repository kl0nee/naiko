module.exports = {
    name: "help",
    aliases: ["ayuda", "h"],
    category: "informacion",
    owners: false,
    desc: "Mira un poco de informacion de Naiko",
    usage: "<prefix>help",
    execute: async (client, message, args) => {
    let prefix = new (require("../utils/functions/prefix.js"))().currentPrefix(client, message.guild.id)
    let Discord = require("discord.js")
    let links = [
    "[GitHub (`NUEVO`)](https://github.com/ImyerDev/naikobot)",
    "[Servidor soporte](https://disboard.org/es/server/714460242800279603)",
    "[Vota a Naiko!](https://top.gg/bot/600439100650160155/vote)"
    ]
    let embed = new Discord.MessageEmbed()
    .setColor(client.color)
    .setAuthor(message.member.user.username, message.member.user.avatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(":wrench: | Para ver toda la informacion de comandos, tienes que usar `"+await prefix+"cmd <nombre>`")
    .addField(":blue_book: | Meta:", "Si usas **Naiko** sabras que tiene "+client.guilds.cache.size+" servidores, pero a los servidores donde quiere llegar **Naiko** son "+100+" servidores")
    .addField("<a:blobdiscord:781631371738742824> | Utilidad:", client.comandos.filter(q => q.category == "utilidad").map(q => "`"+q.name+"`").join(", "))
    .addField("<a:blobdiscord:781631371738742824> | Diversion:", client.comandos.filter(q => q.category == "diversion").map(q => "`"+q.name+"`").join(", "))
    .addField("<a:blobdiscord:781631371738742824> | Informacion:", client.comandos.filter(q => q.category == "informacion").map(q => "`"+q.name+"`").join(", "))
    .addField("<a:blobdiscord:781631371738742824> | Imagen:", client.comandos.filter(q => q.category == "imagen").map(q => "`"+q.name+"`").join(", "))
    .addField("<a:blobdiscord:781631371738742824> | Moderacion:", client.comandos.filter(q => q.category == "moderacion").map(q => "`"+q.name+"`").join(", "))
    .addField("<a:blobdiscord:781631371738742824> |Enlaces:", links.join(" **|** "))
    message.channel.send(embed)
    }
    }