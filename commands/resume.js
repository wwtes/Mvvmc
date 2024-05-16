const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "resume",
  description: "Inicie a música pausada.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue) {
        return interaction.reply({ content: '⚠️ A fila está vazia!!', ephemeral: true });
      }

      if (!queue.paused) {
        return interaction.reply({ content: '⚠️ Sem música pausada!!', ephemeral: true });
      }

      const success = queue.resume();

      const embed = new EmbedBuilder()
        .setColor('#7645fe')
        .setAuthor({
          name: 'Song Resumed',
          iconURL: '',
          url: ''
        })
        .setDescription(success ? '**A música volta à vida!!**' : '❌ Erro: Não é possível retomar a música')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
