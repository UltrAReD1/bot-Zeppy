const {  MessageEmbed } = require("discord.js");

//const db1 = require('megadb')
//let servers = new db1.crearDB('servers');
//const db = require("quick.db")

module.exports.run = async(client, message, args) => {

return message.chanel.send("En mantenimiento")
    message.channel.startTyping()

  if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("No tienes permiso")
          }
          
          const user = message.mentions.members.first()
           let user1 = message.mentions.users.first()
          
          if(!user) {
            return message.channel.send("Menciona a un miembro")
          }
          
          if(message.mentions.users.first().bot) {
            return message.channel.send("No puedes hacer eso con un bot")
          }
          
          if(message.author.id === user.id) {
            return message.channel.send("No se puede")
          }
          
          if(user.id === message.guild.owner.id) {
            return message.channel.send("mmmm si se entera")
          }
          
          const reason = args.slice(1).join(" ")
          
          if(!reason) {
            return message.channel.send("Escribe una razon")
          }
          let kanal = message.channel
          let warnings = servers.tiene(`${message.guild.id}.warns.usuarios.${user.id}`)
          console.log(warnings)
       let log = db.get(`kanal_${message.guild.id}`)
      
            if(log === null) {
              
            
          
          if(warnings === false) {
            
           servers.establecer(`${message.guild.id}.warns`, {usuarios: `${user.id}`})
            servers.establecer(`${message.guild.id}.warns.usuarios.${user.id}`, {razon: `${reason}`, conteo: 0})
            servers.sumar(`${message.guild.id}.warns.usuarios.${user.id}.conteo`, 1)
            user.send(`Haz sido advertido en  **${message.guild.name}** Por ${reason}`)
            await message.channel.send(`Advertiste a : **${message.mentions.users.first().username}** por ${reason}`)
          } else {
              servers.sumar(`${message.guild.id}.warns.usuarios.${user.id}.conteo`, 1)
             user.send(`Haz sido advertido en **${message.guild.name}** por ${reason}`)
            await message.channel.send(`Advertiste a :**${message.mentions.users.first().username}** por: ${reason}`)
          }
            } else{
              if(warnings === false) {
            
           servers.establecer(`${message.guild.id}.warns`, {usuarios: `${user.id}`})
            servers.establecer(`${message.guild.id}.warns.usuarios.${user.id}`, {razon: `${reason}`, conteo: 0})
            servers.sumar(`${message.guild.id}.warns.usuarios.${user.id}.conteo`, 1)
            user.send(`Haz sido advertido en  **${message.guild.name}** Por: ${reason}`)
                
        
                const mensa = new MessageEmbed()
                .setTitle("Un usuario a sido Advertido")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
                .setThumbnail(user1.displayAvatarURL({dynamic:true}))
                 .addField("Usuario Advertido:", `${user} - (${user.id})`, true)
                .addField("Canal de la Advertencia:", kanal, true)
               .setDescription(`**Razon**: \n ${reason}`)
                .addField("Admin responsable:", message.author.username)
                .setTimestamp()
                .setColor("RANDOM")
                .addField("Abvertencias totales:",1, true )
               await client.channels.cache.get(log).send(mensa)
            await message.channel.send(`Advertiste a**${message.mentions.users.first().username}** por ${reason}`)
          } else {
             servers.sumar(`${message.guild.id}.warns.usuarios.${user.id}.conteo`, 1)
             user.send(`Haz sido advertido en **${message.guild.name}** por ${reason}`)
            await message.channel.send(`Advertiste: **${message.mentions.users.first().username}** por ${reason}`)

          
          servers.obtener(`${message.guild.id}.warns.usuarios.${user.id}`).then(datos => {
                
              
            
            const mensa1 = new MessageEmbed()
                .setTitle("Un usuario a sido Advertido")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
            .addField("Usuario Advertido::", `${user} - (${user.id})`, true)
                .setDescription(`**Razon**: \n ${reason}`)
                .setThumbnail(user1.displayAvatarURL({dynamic:true}))
                .setColor("RANDOM")
            .addField("Canal de la Advertencia:", kanal, true)
            .setTimestamp()
            .addField("Admin responsable:", message.author.username)
                .addField("Advertencias totales:",datos.conteo, true )
             return client.channels.cache.get(log).send(mensa1)
          })
                
          }

	}


    message.channel.stopTyping()
}

module.exports.help = {
    name: "warn",
    aliases: [""]
  }