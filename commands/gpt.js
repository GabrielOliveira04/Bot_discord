const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.OPENAI_API_KEY;
//console.log("Chave da API:", apiKey);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gpt")
    .setDescription("Faça uma pergunta para a IA!")
    .addStringOption((option) =>
      option
        .setName("pergunta")
        .setDescription("Digite sua pergunta")
        .setRequired(true)
    ),

  async execute(interaction) {
    const pergunta = interaction.options.getString("pergunta");
    await interaction.deferReply(); // Aguarda resposta

    try {
      const resposta = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: pergunta }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      await interaction.editReply(resposta.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      await interaction.editReply("❌ Ocorreu um erro ao acessar a IA.");
    }
  },
};
