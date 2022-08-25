const eris = require('eris');
const { currentPrefix, setPrefix } = new (require('./utilidades/prefix.js'))();
const client = new BaseClient('Bot ' + process.env.TOKEN, {
  options: {
    autoreconnect: true,
    allowedMentions: {
      everyone: true,
      roles: true,
      users: true,
    },
    maxShards: 'auto',
  },
});
const fs = require('fs');
client.queue = new Discord.Collection();
client.prefixes = require('./utilidades/modelos/prefijos.js');
client.logs = require('./utilidades/modelos/logs.js');
client.profiles = require('./utilidades/modelos/perfil.js');
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
for (const cmdName of fs
  .readdirSync('./comandos')
  .filter((k) => k.endsWith('.js'))) {
  const comando = require('./comandos/' + cmdName);
  client.comandos.set(comando.name, comando);
}
for (const evntName of fs
  .readdirSync('./eventos')
  .filter((k) => k.endsWith('.js'))) {
  const evento = require('./eventos/' + evntName);
  client.on(evntName.replace('.js', ''), evento.bind(null, client));
  client.eventos.set(evntName.replace('.js', ''), evento);
}
client.connect(process.env.TOKEN);
