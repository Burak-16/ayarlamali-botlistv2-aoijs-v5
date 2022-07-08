module.exports = {

name:"bot-kanal",

code:`

✅ Bot Ekleme Kanalı <#$mentionedChannels[1]> olarak ayarlandı

$setServerVar[botkanal;$mentionedChannels[1]]

$onlyif[$mentionedChannels[1;no]!=undefined;Kanal Etiketlemen lazım]

$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]

`}