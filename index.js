const Discord = require("discord.js")
const client = new Discord.Client()

prefix = "hl"

client.on("ready", () => {
  console.log(`${client.user.username} is ready!`)
})
client.on("message", msg => {
  if(msg.author.bot)return

  if(msg.content == prefix + " -h"){
    helpEmbed = new Discord.RichEmbed()
    .setTitle("help")
    .setDescription("Sorry, but there is no any information...")

    msg.send(helpEmbed)
  }
})


client.login("NjUzMTc3NzUwNTM3ODk1OTUy.Xe5JIQ.05IkebX__YKpObp-VSTIhr1AJyM")
