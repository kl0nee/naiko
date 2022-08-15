const Prefix = new (require("../utils/functions/prefix.js"))()
const Discord = require("discord.js")
module.exports = async(client, message) =>{
        const User = await (require("../utils/models/user.js"));
        const lang = new (require("megadb")).crearDB("lang").obtener(message.guild.id)
        const idioma = await new (require("../utils/lang.js"))(client).language[await lang]*/
	client.timer = new Discord.Collection()
	const timer = client.timer
	const prefix = await Prefix.currentPrefix(client, message.guild.id)

/*	const afk = new (require("megadb")).crearDB("afk")
			if(afk.tiene(`${message.guild.id}.${message.author.id}.reason`)) {
				afk.eliminar(`${message.guild.id}.${message.author.id}.reason`)
			return message.channel.send("¡Bienvenido de vuelta!")
			}*/
/*  let link = new db.crearDB("links")
    const links = [
    "discord.gg",
    "discord.me",
    "discord.io/",
    "discord.com/invite",
    "discordapp.com/invite",
    "https://",
    "https://google.com/",
    "https://discord.gg/",
    "https://invite.gg/",
    "invite.gg"
  ]
    if (links.some(word => message.content.toLowerCase().includes(word))) {
      if(message.author.bot) return;
      let embed = new Discord.MessageEmbed() //necesitamos el emoji animado :'c
      .setDescription("<a:deny:718249526217015338> | Links / invitations are not allowed on this guild.")
      .addField("Guild name:", message.guild.name)
      .setColor("36393e")
      .setThumbnail("https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2F404-error&psig=AOvVaw1q-t1Rgr6yGhJeAkRvqCAP&ust=1591400223225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjS1dyr6ekCFQAAAAAdAAAAABAJ")
       message.channel.send(embed)
      }//el de rechazado, la cruz*/
let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);

if (message.content.match(RegMention)) {
  if(message.author.bot) return;
	let embed = new Discord.MessageEmbed()
	.addField("<> | Comandos de Naiko:", "`"+prefix+"help`", true)
	.addField("<a:ole_lo_caracole:718123389080043600> | Creadores:", "`"+client.users.cache.get(client.devs[0]).username+" y "+client.users.cache.get(client.devs[1]).username+"`", false)
	.addField("<:discord:723906848692109333> | Bot server:", "`https://discord.gg/QmMRp7g`", true)
	.setColor("RANDOM")
	.setThumbnail(message.author.displayAvatarURL())
	message.channel.send(embed)
}
if(message.content == "F") {
  if(message.author.bot) return;
  message.react("722566835643482123")
}
   
     
      if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) {
	return;
  }
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

  User.create({userID: message.author.id, info: [message]})
  	  let enfriamientos = client.cooldown
  let cooldowns = client.cooldowns
  let comando = client.comandos.get(command) || client.comandos.find(q => q.aliases.includes(command))
  if(command < 1) return;
  if(comando) {
          
          if(!client.devs.includes(message.author.id)) {
                  if(message.author.id == null) return;
                if(comando.owners) return;
          }
	  	let msgms = new Date() - message.createdAt
  	if (!cooldowns.has(comando.name)) {
	
  	cooldowns.set(comando.name, new Discord.Collection())
	
  }

	const now = Date.now()

	const timestamps = cooldowns.get(comando.name)
	
  const cooldownAmount = enfriamientos.get(`${message.guild.id}.${comando.name}`) * 1000 || 10 * 1000

	if (timestamps.has(message.author.id)) {
		
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount
		if (now < expirationTime) {

			const timeLeft = (expirationTime - now) / 1000
		if(!client.devs.includes(message.author.id)) {
	
      return message.channel.send(`<a:deny:718249526217015338> | Debes de esperar **${timeLeft.toFixed(1)}** segundo/s para volver a usar el comando`)
		
    }else{
		timestamps.delete(message.author.id)
	}
		}
}

	timestamps.set(message.author.id, now)

	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)


  }
