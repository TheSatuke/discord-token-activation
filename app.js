const Discord = require('discord.js-selfbot')
const account_Tokens = [ "",""];
const connectedVoiceChannels = ["",""];
const satuke = [];

for (let index = 0; index < account_Tokens.length; index++) {
    const Token = account_Tokens[index];
    const client = new Discord.Client();
    client.login(Token);
    let acc;
    client.on('ready', async () => {
    client.user.setStatus("dnd");
    console.log(client.user.username);
    acc = await client.channels.cache.get(connectedVoiceChannels[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
    if (cur.member.id === client.user.id) concon = await client.channels.cache.get(connectedVoiceChannels[index]).join();
    })
}
