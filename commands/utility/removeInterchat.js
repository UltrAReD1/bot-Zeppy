const {  MessageEmbed } = require("discord.js");
const db = require("megadb")
let interchat = new db.crearDB('interchat');

module.exports.run = async(client, message, args) => {

    message.channel.startTyping()

        let canal = message.mentions.channels.first()
        if(!canal) return message.channel.send("Te falto mencionar el canal")
   let array = interchat.obtener("array").then(n => {
    interchat.extract("array", canal.id)

message.channel.send("Canal eliminado con exito")
     
    message.channel.stopTyping()
   })


}

module.exports.help = {
    name: "removeInterchat",
    aliases: []
  }