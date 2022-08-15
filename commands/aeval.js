module.exports = {
	name: "aeval",
	aliases: ["ae"],
	category: "desarrolladores",
	owners: true,
	desc: "Prueba un codigo",
	usage: "<prefix>aeval <code>",
	execute: async(client, message, args) =>{
	const Discord = require("discord.js")
	try {
    if(!args.join(" ")) return message.channel.send("<a:deny:718249526217015338> | Debes poner algo para evaluar")
	const code = await eval("(async() => { "+args.join(" ")+" })()")
	const type = typeof code
	const types = {
		_configs1: {
		string: "Texto",
		number: "Numero",
		object: "Objeto",
		"function": "Función",
		array: "Array",
		promise: "Promesa",
    boolean: "Booleano",
		},
		err: "Error:"
	}
	      if (typeof code !== "string")
        code = require("util").inspect(code, { depth: 0 });
	const embed = new Discord.MessageEmbed()
	.setDescription("<a:approve:734933612906020974> | Evaluado en `"+client.ws.ping+"` ms")
	.addField("Entrada:", "```js\n"+args.join(" ")+"\n```")
	.addField("Salida:", "```js\n"+code.replace(client.token, process.env.TOKEN_FOUNDED_IN_A_GLITCH_PROYECTXD)+"\n```")
	.addField("Tipo:", "```js\n"+types._configs[type]+"\n```")
	.setColor(client.color)
	message.channel.send(embed)
	} catch(e) {
	    const types = {
		/*_configs: {
		string: "Texto",
		number: "Numero",
		object: "Objeto",
		"function": "Función",
		array: "Array",
		promise: "Promesa",
    boolean: "Booleano",
		},*/
		err: "Error:"
	}
	message.channel.send("`ERROR`: ```js\n"+types.err+e.message+"\n```")
	}
	}
}
