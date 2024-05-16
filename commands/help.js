/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Obtenha informações sobre bot e comandos.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Comandos musicais**')
        .addFields(
          { name: '🎹 Play', value: 'Transmita uma música de um determinado link ou texto de fontes' },
          { name: '⏹️ Stop', value: 'Faz o bot parar de tocar música e sair da voz' },
          { name: '📊 Queue', value: 'Visualize e gerencie a fila de músicas deste servidor' },
          { name: '⏭️ Skip', value: 'Pular a música que está sendo reproduzida no momento' },
          { name: '⏸️ Pause', value: 'Pausar a música atualmente tocando' },
          { name: '▶️ Resume', value: 'Retomar a música atualmente pausada' },
          { name: '🔁 Loop', value: 'Alternar modo de loop para fila e música atual' },
          { name: '🔄 Autoplay', value: 'Ative ou desative a reprodução automática [reproduzir músicas aleatórias ]' },
          { name: '⏩ Seek', value: 'Procure um horário específico na música atual' },
          { name: '⏮️ Previous', value: 'Reproduzir a música anterior da fila' },
          { name: '🔀 Shuffle', value: 'Embaralhe as músicas na fila' },
          { name: '📃 playlist', value: 'gerenciar as listas de reprodução' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Comandos Básicos**')
        .addFields(
          { name: '🏓 Ping', value: "Verifique a latência do bot" },
          { name: '🗑️ Clear', value: 'Limpe a fila de músicas deste servidor' },
          { name: '⏱️ Time', value: 'Exibir o tempo de reprodução da música atual' },
          { name: '🎧 Filter', value: 'Aplique filtros para aprimorar o som como você gosta' },
           { name: '🎵 Now Playing', value: 'Exibir as informações da música atualmente sendo reproduzida' },
          { name: '🔊 Volume', value: 'Ajuste o volume da música [ouvir em volumes altos é arriscado]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1150827819547504741/1168917372267151370/standard.gif?ex=65538222&is=65410d22&hm=b4994392f44679da41fc9304eb69deaa3769e136057556deec0db69ae8d33a97&')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('off')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/YBkUdUWc')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('off')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
