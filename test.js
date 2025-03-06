require("dotenv").config();
const axios = require("axios");

async function testarIA() {
  try {
    const resposta = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo-1106",
        messages: [
          {
            role: "user",
            content: "Explique o que é JavaScript de forma simples",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    console.log("Resposta da IA:", resposta.data.choices[0].message.content);
  } catch (erro) {
    console.error(
      "Erro ao acessar a API:",
      erro.response ? erro.response.data : erro
    );
  }
}

testarIA();
