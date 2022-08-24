const eris = require('eris');
// Structures
//let { Structures } = require("discord.js")
const { currentPrefix, setPrefix } =
  new (require('./utils/functions/prefix.js'))();
/*
little update
// Guild structure
Structures.extend("Guild", Guild =>{
return class extends Guild{
 constructor(client, data) {
 super(client, data);
 this.prefix = {
 current: currentPrefix(client, this.id),
 change: async(newprefix) =>{ 
 if(!newprefix) return 'puto';
 return setPrefix(client, this.id, newprefix)},
 has: currentPrefix(client, this.id) == "n." ? false : true
 }
 this.options = {
 prefix: currentPrefix(client, this.id) == "n." ? false : true
 }
 }
}
})
// User structure
Structures.extend("User", (User) =>{
return class extends User{
constructor(client, data) {
 super(client, data);
 this.options = {
developer: client.devs.includes(data.id) ? true : false,
cool: true
}
}
}
})
// GuildMember structure
Structures.extend("GuildMember", (GuildMember) =>{
return class extends GuildMember{
constructor(client, data, guild) {
super(client, data, guild);
this.options = {
developer: client.devs.includes(data.id) ? true : false,
superCool: true
}
}
 hasPermission(permission, { checkAdmin = true, checkOwner = true } = {}) {
 if(checkOwner && this.user.id === this.guild.ownerID) return true;
 if(permission == "NAIKO_DEVELOPER") return client.devs.includes(this.user.id) ? true : false 
 return this.roles.cache.some(r => r.permissions.has(permission, checkAdmin));
 }
}
})
//Message structure
Structures.extend("Message", (Message) =>{
return class extends Message{
constructor(client, data, channel) {
super(client, data, channel);
this.server = this.guild
}
}
})*/
//let BaseClient = require("./utils/structures/Client.js")
const client = new BaseClient('Bot ' + process.env['TOKEN']);
const fs = require('fs');
//Connecting to database
const mongoose = require('./utils/mongoose.js');
//Functions
client.queue = new Discord.Collection();
client.antiinvite = require('./utils/models/prefixes.js');
client.prefixes = require('./utils/models/prefixes.js');
client.blacklist = require('./utils/models/blacklist.js');
client.logs = require('./utils/models/logs.js');
client.profiles = require('./utils/models/profile.js');
client.color = 'F4F4F4';
client.devs = [
  '450291712703856650',
  '654387658734436364',
  '852716180158152734',
];
client.cooldowns = new Discord.Collection();
client.snipes = new Map();
client.cooldown = new Discord.Collection();
client.comandos = new Discord.Collection();
client.eventos = new Discord.Collection();
client.editsnipes = new Map();
//Handlers
//Commands
for (const cmdName of fs
  .readdirSync('./commands')
  .filter((k) => k.endsWith('.js'))) {
  const comando = require('./commands/' + cmdName);
  client.comandos.set(comando.name, comando);
}
//Events
for (const evntName of fs
  .readdirSync('./events')
  .filter((k) => k.endsWith('.js'))) {
  const evento = require('./events/' + evntName);
  client.on(evntName.replace('.js', ''), evento.bind(null, client));
  client.eventos.set(evntName.replace('.js', ''), evento);
}
client.login(process.env.TOKEN);
