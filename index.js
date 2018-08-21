"use strict";
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
let config;

console.log("Starting WangBot");
console.log("Loading config.json");

//Try to read from config.json, if we fail, show a friendly error, with debugging information for pros.
try{
  config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
}
catch (error){
  console.log(error);
  console.log("\nThere was an error trying to read the config file. Please ensure you have one!\nIf not, read the README for an explanation. If you do have one, shout at me on Gitlab!");
  process.exit(0);
}

const token = config.token;
const prefix = config.prefix;

client.on("ready", function(){
    console.log(`Bot started successfully and connected as ${client.user.tag} on ${client.guilds.size} server(s)!`);
});

client.on("message", async message =>{
    if (message.author.bot) return;
    if (message.content.indexOf(prefix)!==0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command == "ping"){
        const msg = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

});

client.login(token);
