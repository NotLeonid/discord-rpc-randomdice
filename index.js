'use strict';

const DiscordRPC=require('discord-rpc');
const clientId="1103039767324655696";
DiscordRPC.register(clientId);
const rpc=new DiscordRPC.Client({transport:'ipc'});
const startTimestamp=new Date();

rpc.on('ready',()=>{
rpc.setActivity({
//details:``,
//state:'',
startTimestamp,
largeImageKey:"icon",
largeImageText:"Random Dice",
//smallImageKey:"coop_pass",
//instance:false,
//buttons:[{label:"Click me",url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}],
});
});
rpc.login({clientId}).catch(console.error);