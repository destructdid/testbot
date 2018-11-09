console.log("test");
const Commando = require('discord.js-commando');
const TOKEN = 'NTEwMzA0NDE4MjM5ODczMDI1.DsaZyQ.0VHL66kHWC8KLyiMqLuwtdY8yf4';
const youtubeKey = 'AIzaSyB6rYL_FNGzMxT5ta0V3DnvotXwQ78_tUg';
class Bot extends Commando.Client {
    constructor(options) {
        super(options);
        this.music = require("discord.js-musicbot-addon");
      }
}
const client = new Bot();
client.registry.registerGroup('simple', 'Simple');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands');

client.login(TOKEN);

client.on('message', message => {
    if(message.content.toLowerCase().includes('reee')){
        message.reply("I'm going to need you to settle down, is that okay?");
    }
    else{
        return;
    }
});