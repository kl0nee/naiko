let Prefix = new (require("../utils/functions/prefix.js"))()
  module.exports = {
  name: "stats",
  aliases: ["botstats", "botinfo"],
  owners: false,
  category: "informacion",
  desc: "Muestra la informacion de Naiko",
  usage: "<prefix>stats",
  execute: async (client, message, args) => {
	let Discord = require("discord.js")
let usos = new (require("megadb")).crearDB("usos")
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription("Gracias por el apoyo a Naiko, los esperamos a todos en el servidor soporte!")
.addField(":blue_book: | Informacion General:", [
"**Nombre del proyecto**: Naiko",
"**Uptime**: "+require("humanize-duration")(client.uptime, {language: "es", serialComma: false, round: true, delimiter: " y "}),
"**Libreria**: Discord.js ("+Discord.version+")",
"**Creadores**: "+client.users.cache.get(client.devs[0]).tag,
"**Dia de la verificacion**: 14/10/2020",
"**Arquitectura**: "+process.arch,
"**Plataforma**: <:linux:747898566525190225>",
""+Prefix.currentPrefix(client, message.guild.id) ? "**Prefix personalizado/default**: "+(await Prefix.currentPrefix(client, message.guild.id)) : ""
])
.addField(":books: | Estadisticas:", [
"**Ping**: "+client.ws.ping+"ms",
"**Shard #0**: "+client.ws.shards.get(0).ping+"ms",
"**Uso de memoria**: "+(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+" MB",
"**Servidores**: "+client.guilds.cache.size,
"**Usuarios**: "+client.users.cache.size,
"**Canales**: "+client.channels.cache.size,
"**Emojis**: "+client.emojis.cache.size
])
.addField("<:wumplus:360209987815079936> | Comandos:", [
"**Comandos**: "+client.comandos.size,
"**Comandos usados**: "+await usos.obtener("Usos")
])
.setColor(client.color)
.setThumbnail(message.author.avatarURL())
message.channel.send(embed)
}
}