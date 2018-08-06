const Discord = require("discord.js");
const fs =require('fs');
const moment =require('moment');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`Hello , I'm Luxury. .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});




 const child_process = require("child_process");
  client.on('ready' , function (){
var time = 7200000;
client.setInterval(function() {
    client.destroy();
        child_process.fork(__dirname + "/bot.js");
  }, time);
});



client.on('message', msg => {
if  (msg.content === '%help') {
    const slamat = new Discord.RichEmbed()
    .setDescription('**Done , Check your DM.**')
    .setThumbnail(msg.author.avatarURL)
    msg.channel.send(slamat);
  }
});



client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:earth_africa: The Public Commands :earth_africa:
1༺༻  %ccolors , number of colors  | Make colors ༺༻
2༺༻  %user | Shows User Info with photo.༺༻
3༺༻  %server-info | Shows Server Info༺༻
4༺༻  %ping | Shows Bot Ping༺༻
5༺༻  %uptime | Shows Bot Time༺༻
6༺༻ %server-inv | Show server invite link༺༻
7༺༻  %bot | Shows Bot Info༺༻
8༺༻  %avatar | Shows User Avatar༺༻
9༺༻ %server-image | Shows Server Avatar༺༻
10༺༻ %mcskin  | Shows Minecraft Players Skin༺༻
11༺༻  %say  | Repeat What Your Saying༺༻
12༺༻  %count | Give you number of server members༺༻
13༺༻  %perms  | Give your perms info༺༻
14༺༻  %rooms  | See you the rooms in the server༺༻
15༺༻  %roles  | See you the roles in the server༺༻
18༺༻  %roll number  | give you a random number༺༻
19༺༻  %members-status  | Give you the members stats༺༻
20༺༻  %serverinvs  | See the server invites༺༻
21༺༻  %invinfo invite code  | Show the invite info༺༻
22༺༻  %invites  | See your invites༺༻
23༺༻  %emojilist emoji  | Show the emoji photo༺༻
24༺༻  %allbots  | Show the server bots༺༻
25༺༻  %bans  | Show the server bans༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go Administor Side
   `
,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:closed_lock_with_key: Administrator Commands:closed_lock_with_key:
1༺༻  %clear | Clear The Chat༺༻
2༺༻  %bc | Msg Everyone In The Server༺༻
3༺༻  %kick | Kick With Reson༺༻
4༺༻  %ban | Ban With Reason༺༻
5༺༻  %mute @mention time reason  | Give the member mute with time༺༻
6༺༻  %unmute @mention | Unmute member༺༻
7༺༻  %ct  | Make a text channel༺༻
8༺༻  %cv  | Make a voice channel༺༻
9༺༻  %delete name of channel | Delete a channel༺༻
10༺༻  %mutechannel  | Mute the channel༺༻
11༺༻  %unmutechannel  | Unmute the channel༺༻
12༺༻  %hchannel  | Hide the channel༺༻
13༺༻  %schannel  | Show the channel༺༻

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go To Bot Info
   `,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
1༺༻  Make a room called ' log ' ༺༻
2༺༻More commands coming soon ! ༺༻
3༺༻Developed By:ElBrazily EG.#8234༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   `]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});


  client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`You sent your token! Do not worry you've deleted it`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`You sent your token! Do not worry you've deleted it`);
        return;
    }
}
});



client.on('message', msg => {
  if(msg.author.bot) return;

  if(msg.content === 'links') {
    client.guilds.forEach(g => {

      let l = g.id
      g.channels.get(g.channels.first().id).createInvite({
        maxUses: 5,
        maxAge: 86400
      }).then(i => msg.channel.send(`${g.name} | <https://discord.gg/${i.code}> | ${l}`))


    })
  }

})



client.on('message', message => {
    if(message.content == prefix + 'slist') {
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var gid;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gid = g.id;
    gmemb = g.members.size;
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg,)
    .setThumbnail(gimg)
    .addField('Server Member Count',gmemb = g.members.size)
    .setDescription(gid)
    .setColor('RANDOM')
    message.channel.send(`

            `);
          message.channel.sendEmbed(serv);
    })
    }
    });





client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('%ElBrazilyBc')){
 if (message.author.id !== '418064523157700609') return message.reply('** This command only for bot owner. **')
 if(!message.author.id === '418064523157700609') return;
message.channel.sendMessage('**Done.** |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});








client.on('message', ra3d => {
var prefix = "%";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`Please , Put a number of the colors. `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | You don"t have `MANAGE_ROLES` permission**');
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

 client.on('message', message => {
	 var prefix ="%";
 if(message.content.startsWith(prefix +"server-info")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.addField("** َ **",`Write %roles to see server role. `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});




 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='%count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('Server count members : ',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

 client.on('message', message => {
	    var prefix = "%";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**This command only for servers :x: **').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Luxury Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**You must type a word or phrase to send the broadcast. :x: **');message.channel.send(`**Are you sure you want to send your broadcast? , \n Broadcast content :** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {

  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server :', message.guild.name)
       .addField('Sender :', message.author.username)
       .addField('Massage :', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });





client.on('message', message => {
  var prefix ="%";
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});

client.on('message', message => {
    if (message.content === "%rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)

.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});




var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "%roles"){
        var
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});




client.on('message', message => {
      if(message.content === "%hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**You don"t have `MANAGE_CHANNELS` permission.** :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel hided successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
      if(message.content === "%schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**You don"t have `MANAGE_CHANNELS` permission.** :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**Channel Showed successfully ! :white_check_mark: **')
 }
});





client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**Thanks for added the bot in your server.
  Have a nice time !**`)
      guild.owner.send(embed)
});

client.on("message", message => {
    const prefix = "%"

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "server-image"){
          const embed = new Discord.RichEmbed()

      .setTitle(`This is   ${message.guild.name}'s  photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });




	  var prefix = "%";
	  client.on('message', message => {
        let args = message.content.split(" ").slice(1).join(" ")
        let men = message.mentions.users.first()
        if(message.content.startsWith(prefix + "roll")){
            if(!args) return message.channel.send("**Please , Put a number.**")
            message.channel.send(Math.floor(Math.random() * args))
        }
    });


   client.on('message',function(message) {
  if (message.author.bot) return;
var prefix = "%";
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members-status") {
 const embed = new Discord.RichEmbed()

    .setDescription(`Members info :sparkles:
**:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });






client.on('message', message => {
var prefix = "%";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You dont have `MANAGE_MASSAGES` permission**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**Done , The chat was closed.:white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You dont have `MANAGE_MASSAGES` permission**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**Done , The chat was opend.:white_check_mark:**")
              });
    }

});




var prefix = "%";
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith('%clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send('**You dont have `MANAGE_MESSAGES` permission**' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done , The chat was deleted.",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.on("message", (message) => {
if (message.content.startsWith("%ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You don't have `MANAGE_CHANNELS` premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
    message.channel.sendMessage('**Done , The text channel will create.**')

}
});




client.on("message", (message) => {
if (message.content.startsWith("%cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You don't have `MANAGE_CHANNELS` premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('**Done , The voice channel will create.**')

}
});





client.on("message", (message) => {
    if (message.content.startsWith('%delete')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You don't have `MANAGE_CHANNELS` premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name :x: **').catch(console.error);
        channel.delete()
    }
});



client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "%serverinvs"){
message.guild.fetchInvites()
  .then(invites => message.channel.send(`Fetched ${invites.size} invites`))
  .catch(console.error);
}
});



client.on('message', message => {
    var args = message.content.split(' ')
    if (message.content.toLowerCase().startsWith("%invinfo")) {
var [embed,inv,uses]=[new Discord.RichEmbed(),null,''];
message.guild.fetchInvites().then(i =>{

    inv=i.get(args[1])
    if(inv.maxUses){
        uses=+inv.uses+"/"+inv.maxUses
    }else{
        uses=+inv.uses
    }



      message.channel.send(new Discord.RichEmbed().setTitle('Invite info').setAuthor(message.author.tag,message.author.displayAvatarURL)
    .addField('Inviter : ',i.get(args[1]).inviter,true)
    .addField('Created At :',moment(i.get(args[1]).createdAt).format('YYYY/M/DD:h'),true)
    .addField('Expires at : ',moment(i.get(args[1]).expiresAt).format('YYYY/M/DD:h'),true)
    .addField('Channel : ',i.get(args[1]).channel,true)
    .addField('Uses : ',uses,true)
    .addField('Max age : ',i.get(args[1]).maxAge,true).setColor(030101).setFooter('By: '+message.author.tag,message.author.displayAvatarURL)

);
        })}
    });










client.on('message', message => {
  if(message.content.startsWith(`%invites`)) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has **${inviteCount}** invites.`);
});
  }
});





client.on('message', message => {
    if (message.content.startsWith('%emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('#9c9c9c')
            .setDescription(List)
            .setFooter(LuxuryBot)
        message.channel.send(EmojiList)
    }
});







client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith('%allbots')) {


    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} Bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});



client.on('message', message => {
    if (message.content.startsWith("%server-inv")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("#9c9c9c")
        .setDescription(":white_check_mark:  **|** **Done , Check your DM.**  ")
        .setFooter("Luxury.")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("#9c9c9c")
        .setDescription(`
**-------------------
This is an invite.
You can give anyone this invite.
Thanks !
------------------- **`)
        .setFooter("By: ElBrazily.")
      message.author.sendEmbed(Embed11)
    }
});


  client.on('message', message => {
     if(message.content.startsWith("%bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});



client.on('message', message => {
    if (message.content === "%channelinfo") {
                 if(!message.channel.guild) return message.reply('This commands only for servers. :x: ');

   const embed = new Discord.RichEmbed()
    .setColor("#9c9c9c")
    .addField(':arrow_right_hook:  | Name',`**[-` + `${message.channel.name}]**`, true)
    .addField(':id:  | ID ',`**[${message.channel.id}]**`, true)
    .addField(':date: | Date ', `**[${message.channel.createdAt}]**`, true)

     message.channel.send({embed});
    }
   });


client.on('message', message => {
            if (message.content.startsWith("%cto")) {
                if(!message.channel.guild) return;
                if (!message.member.hasPermission("MANAGE_CHANNELS"))  return;
      var a= message.content.split(' ').slice(1).join("  ");
      if (!a) return message.reply("**Write a massage to put it in the topic.**")
      message.channel.setTopic(`${a}`)
      .then(newChannel => message.channel.send(`The topic was changed to :- **${a}**`))
      .catch(console.error);
            }
        });




const gif = require("gif-search")
client.on('message', message => {
    if(message.content.startsWith('%gif')) {
console.log('[Gif Search] Developed By Ghost')
        if(message.channel.type === 'dm') return message.channel.send('Only For Servers')
        let args = message.content.split(' ').slice(1).join(' ')
            if (!args) return message.reply('Please put a name of the picture.')
    gif.query(args).then(gifUrl => {
        message.channel.send({
            files: [{
                attachment: gifUrl,
                name: "search.gif"
            }]
        });
    });
}
});



 const math = require('math-expression-evaluator');
client.on('message', message => {
 if (message.content.startsWith('%calc')) {
     if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');

     const w = ['./math.png'];

             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);

     })
         let args = message.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        message.reply('Specify a equation, please.\n\ Ex: %calc 5+5 ' );
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        message.reply(`Error: ${err}`);
    }
 var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);


                                                     ctx.font = '42px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '50px';
                                                     ctx.fillStyle = "#ffffff";
                                                     ctx.fillText(`${answer}`,108, 130);


                                                      ctx.font = '25px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                     ctx.fillText(`${question}`,105, 90);


                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());




                             })

                             })
 }
 }
 });



   const sql = require("sqlite");
client.on("message", async message => {
    if (message.content.startsWith(prefix + "Achiev")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("**اكتب وش تبي يكون بلانجاز**");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});




client.on('message',function(message) {
                  if(!message.channel.guild) return;

                    if (message.content === "%discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);

    if (message.author.bot) return;

    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);

}
});





client.on('message', message => {
    if(message.content === "%bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#9c9c9c")
  .addField('** Memory Usage : 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('** Ping : 📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**RAM Usage : 💿**', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
        .addField('**Servers : 🌐**' , `${client.guilds.size}`, true)
        .addField('**Users : 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});


client.on('message', message => {
    if(message.content == ('%user')) {

             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');

     const w = ['./ID5.png'];

             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);

     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);

                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";


                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);


                                                          moment.locale('ar-ly');


                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);


                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170);

                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'Online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'Dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'Idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'Offline';
     }


                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)

                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "Not Playing" : h.presence.game.name}`,390,390);

                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)

                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());




                             })

                             })
 }
 });



client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('%ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('#9c9c9c')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});



client.on('message', message => {
    var prefix = "%"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});




client.on('message', message =>{
  let args = message.content.split(' ');
  let prefix = '%';
if(args[0] === `%emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.reply(`**Please add the emoji.**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.reply(`**I can't find the emoji. :x:**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let EmojiEmbed = new Discord.RichEmbed()
.setColor('#9c9c9c')
.setTitle(`Link Emoji ${findEmoji}`)
.setURL(`${EmojiURL}`)
.setImage(`${EmojiURL}`)

message.channel.send({ embed  : EmojiEmbed });

};
});


client.login("BOT_TOKEN");
