const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`${client.user.username} is ready!`)
})
client.on("message", msg => {
  if(msg.author.bot)return

  // if(msg.content == ""){
  //
  // }
})


client.login("NjUzMTc3NzUwNTM3ODk1OTUy.Xe4oIQ.i5eLQbocQpEPozWIWr-chUNBMoI")
