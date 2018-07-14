const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

client.on("ready", function() {
    console.log("Ready !");
});

client.on("message", function(message) {
    if (message.author.id != "467669682527404032" && message.content.toLowerCase() == "nice") {
        message.channel.send(message.content);
    }
});

client.login("NDY3NjcyODg2NTIyNTQ0MTI4.DiuB2A.2gd4v5I4-OAycI_DAo_IDv0SuEs");