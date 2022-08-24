module.exports = {
  name: 'aeval',
  aliases: ['ae'],
  category: 'desarrolladores',
  owners: true,
  desc: 'Prueba un codigo',
  usage: '<prefix>aeval <code>',
  execute: async (client, message, args) => {
    const Discord = require('discord.js');
    try {
      if (!args.join(' '))
        return message.channel.send(
          '<a:deny:718249526217015338> | Debes poner algo para evaluar'
        );
      const code = await eval('(async() => { ' + args.join(' ') + ' })()');
      const type = typeof code;
      if (typeof code !== 'string')
        code = require('util').inspect(code, { depth: 0 });
      const embed = {
        description: '<a:approve:734933612906020974> | Evaluado en `0` ms',
        color: 0xe29a1c,
        timestamp: new Date(),
        fields: [
          {
            name: 'Entrada:',
            value: '```js\n' + args.join(' ') + '\n```',
            inline: false,
          },
          {
            name: 'Salida:',
            value:
              '```js\n' +
              code.replace(client.token, process.env.GLITCH_TOKEN) +
              '\n```',
            inline: false,
          },
          {
            name: 'Tipo:',
            value: '```js\n' + types._configs[type] + '\n```',
            inline: false,
          },
        ],
      };
      message.channel.send(embed);
    } catch (e) {
      message.channel.send(
        '`ERROR`: ```js\n' + types.err + e.message + '\n```'
      );
    }
  },
};
