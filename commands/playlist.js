const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Melhor playlist de estudos!"),

  async execute(interaction) {
    await interaction.reply(
      "https://open.spotify.com/playlist/1c1Sks1LWaZCnQFRKHqzEJ?si=jrTPfdI7SwODVNY6YhlGDA&pi=Rn6HWrA8RYWrX"
    );
  },
};
