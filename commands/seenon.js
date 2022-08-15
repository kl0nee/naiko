module.exports = {
	name: "seenon",
	aliases: ["servidores-comun"],
	category: "utilidad",
	owners: false,
	desc: "Obtiene los servidores donde estas en comun con el bot",
	usage: "<prefix>seenon || <prefix>seenon <mentioned>",
   execute: async(client, message, args) =>{
	   let usuario = message.mentions.users.first();
	   	   let embed3 = new (require("discord.js")).MessageEmbed()
		.setAuthor("Te encontre en "+client.guilds.cache.filter(q => q.members.cache.get(message.author.id)).size+" servidor/es | "+message.author.tag, message.author.avatarURL())
	   .setDescription("Servidor/es:\n```"+client.guilds.cache.filter(q => q.members.cache.get(message.author.id)).map(q => q.name).join(", ")+"```")
	   .setColor(client.color)
	   if(!usuario) return message.channel.send(embed3)
	   let seein = client.guilds.cache.filter(q => q.members.cache.get(usuario.id)).map(q => q.name).join(", ")
	   let seesize = client.guilds.cache.filter(q => q.members.cache.get(usuario.id)).size
	   let servidores;
	   let Servidor;
	   if(seesize === 1) {
       servidores = "servidor"
       Servidor = "Servidor"
	   }else{
       servidores = "servidores"
	   }
	   if(usuario.id == client.user.id) return;
	   if(usuario) {
	   let embed2 = new (require("discord.js")).MessageEmbed()
	   .setAuthor("Encontre a "+usuario.username+" en "+seesize+" "+servidores+" | "+usuario.tag, usuario.displayAvatarURL())
	   .setDescription(Servidor+":\n```"+seein+"```")
	   .setColor("RANDOM")
	   message.channel.send(embed2)
	   }
   }
}