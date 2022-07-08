module.exports = {

name:"bot-log-ayarla",

code:`

✔️ Bot Log Açıldı Bot Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı

$setServerVar[botlog;$mentionedChannels[1]]

$onlyif[$mentionedChannels[1;no]!=undefined;Kanal Etiketlemen lazım]

$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]

`

}