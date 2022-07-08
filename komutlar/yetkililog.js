module.exports = {

name:"yetkili-bot-log-ayarla",

code:`

✔️ Yetkili Bot Logu <#$mentionedChannels[1]> Olarak Ayarlandı

$setServerVar[yetkililog;$mentionedChannels[1]]

$onlyif[$mentionedChannels[1;no]!=undefined;Kanal Etiketlemen lazım]

$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]

`

}