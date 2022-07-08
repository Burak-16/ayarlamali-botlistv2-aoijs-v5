module.exports = {

name:"yetkili-rol-ayarla",

code:`

✅ Yetkili Rolü $roleName[$mentionedRoles[1]] olarak ayarlandı

$setServerVar[yetkilirol;$mentionedRoles[1]]

$onlyif[$mentionedRoles[1;no]!=undefined;Rol Etiketlemen Lazım]

$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]

`}