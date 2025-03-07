const {REST, Routes} = require("discord.js")


//dotenv
const dotenv = require("dotenv");
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

//importanção dos comandos

const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));
  
const commands = []

for (const file of commandsFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON())
}

//instância REST
const rest = new REST({ version: "10" }).setToken(TOKEN);

//DEPLOY
    (async () => {
        try {
            console.log(`Resetando ${commands.length} comandos...`)
            
            //PUT
            const data = await rest.put(
                Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
                {body: commands}
            )
                console.log(`Comandos Registrados com sucesso`)
        }
        catch (erro) {
            console.error(error)
        }
})()