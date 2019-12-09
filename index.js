const Discord = require("discord.js")
const client = new Discord.Client()

prefix = "hl"

client.on("ready", () => {
  console.log(`${client.user.username} is ready!`)
})
client.on("message", msg => {
  if(msg.author.bot)return

  if(msg.content == "hl"){
    hlAll = new Discord.RichEmbed()
    .setTitle("please type `hl -h` or `-help` to get info")
    .setColor("#ff0000")

    msg.channel.send(hlAll)
  }

  if(msg.content == prefix + " -h"){
    hlHelp = new Discord.RichEmbed()
    .setTitle ("help")
    .setColor ("#ff0000")
    .addField ('-cmds', 'type ' + prefix + ' `-cmds` or `-commands` to get all commands')

    msg.channel.send(hlHelp)
  }
  if(msg.content == prefix + " -cmds"){
    hlCmds = new Discord.RichEmbed()
    .setTitle("commands")
    .setDescription("Sorry, there is no any commands yet...")
    .setColor("#ff0000")

    msg.channel.send(hlCmds)
  }
})


client.login("NjUzMTc3NzUwNTM3ODk1OTUy.Xe5RzQ.PS4wNEugiEDZyHxJIGGjl2wIC7w")
