const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token,
prefix: "$getServerVar[prefix]",
intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Command Handler
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./komutlar/")
//Command Handler

//Callbacks
bot.onMessage()
//Callbacks

//Değişkenler

bot.variables({

  prefix:"!",

  botlog:"Ayarlanmamıs",

  botkanal:"Ayarlanmamıs",

  yetkililog:"Ayarlanmamıs",

  yetkilirol:"Ayarlanmamıs",
  
  başvuranbotu:"Ayarlanmamıs"

  })

//Değişkenler


//Örnek komut (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

bot.leaveCommand({

  channel:"$getServerVar[botlog]",

  code:`

  $author[Baybay $userTag ve botu $userTag[$getServerVar[başvuranbotu;$authorID]];$authorAvatar]

  $description[$userTag sunucudan ayrıldığı için botu $userTag[$getServerVar[başvuranbotu;$authorID]] sunucudan atıldı]

  $color[GREEN]

  $kick[$getServerVar[başvuranbotu;$authorID]]

  $suppressErrors

  `
  }) 
