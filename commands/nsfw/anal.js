const {  MessageEmbed } = require("discord.js");

const clien = require('nekos.life');
const {nsfw} = new clien();
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    if (message.channel.nsfw === true) {
        let user = message.mentions.users.first()
        
    
        
        if(user){
                    if(user.id === "725877650870239254") return  message.channel.send("Estas loco")
            
    
          let imagen = await nsfw.anal().then(juas => {
            let aut = message.author.username
            const embed = new MessageEmbed()
              .setDescription(`${aut} le hizo un anal a ${user}`)
              .setImage(juas.url)
              .setColor("RANDOM");
          
    message.channel.send({embed});
    
          })
        
    
        } else {
    
        
        message.delete()
    
        
      let imagen = await nsfw.anal().then(juas => {
            const embed = new MessageEmbed()
              .setTitle("")
              .setImage(juas.url)
              .setColor("RANDOM");
          
    message.channel.send({embed});
          })
        }
      }else{
        message.channel.send("Este no es un canal NSFW")
      }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "anal",
    aliases: []
  }