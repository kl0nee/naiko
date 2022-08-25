let AntiInvites = require("../utils/models/antiinvites.js")
let Discord = require("discord.js")
module.exports = {
	name: "antiinvites",
	aliases: ["antiinvitaciones", "invitaciones"],
	category: "moderacion",
	owners: false,
	desc: "Activa el sistema AntiInvitaciones para tu servidor",
	usage: "<prefix>antiinvites <on> || <off>",
	execute: async(client, message, args) =>{
        let Prefix = await require("../utils/models/prefixes.js").findOne({guildID: message.guild.id})
        if(!args.length) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Anti Invitaciones")
        .setDescription("Ejemplo de uso:")
        .addField(Prefix.prefix+"antiinvites on", "Esto se usa para activar el sistema AntiInvitaciones (proteger tu server de invitaciones)")
        .addField(Prefix.prefix+"antiinvites off", "Esto se usa para desactivar el sistema AntiInvitaciones (desproteger tu server de invitaciones)")
        .addField(Prefix.prefix+"antiinvites casesMax", "Esto se usa para limitar los casos que puede tener nada mas un usuario (por ejemplo, un usuario mando invitaciones 10 veces, y los casos maximos son 10, entonces yo lo muteo por 1 hora)")
        .addField(Prefix.prefix+"antiinvites extreme", "Esto se usa para activar el modo extremo")
        .setThumbnail(message.author.name, message.author.avatarURL())
        .setColor("RANDOM")
        message.channel.send(embed)
        }
   }
}