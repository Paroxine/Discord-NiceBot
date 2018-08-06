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

fs.readFile("gitignore/token.txt", "utf8", function(err, data) {
    if (err) throw err;

    client.login(data);
})