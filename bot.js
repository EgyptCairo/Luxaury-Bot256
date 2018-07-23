const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "%";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Luxary') {
        message.reply('ماهو لوكسري بوت؟ , لوكسري بوت هو البوت العربي الأفضل على الساحة , يتوفر فية ميوزك , مانع الهكر  , 24 ساعة , والعاب , يرجى اضافتة الى السيرفر الخاص بكم , وشكراَ');
      }
});



client.login(process.env.BOT_TOKEN);
