const discord = require("discord.js");
const bot = new discord.Client;

bot.login(process.env.token);

var embed = new discord.MessageEmbed()
      .setColor("#f2f2f2")
      .setTitle("Clicca qui per scaricare i giochi migliori al mondo")
      .setURL("https://sites.google.com/view/giochidimatteo/scarica")
      .setDescription("Solo per PC")
      .addField("Gioco v1.1", "Gioca al famoso gioco arcade Breakout, ma molto più difficile", false)
      .addField("DEMO", "Evita le dinamiti e ottieni il puntegio più alto (o più basso) di tutti", false)
      .setThumbnail("https://images-ext-2.discordapp.net/external/H_kDgZ0pZ5KtvxHEkUhTjEfs3lxKnD_zkWTxXVU1nf0/%3Fsize%3D512/https/cdn.discordapp.com/icons/760184013121257512/a899a4245989567ade6b760756748769.png")
      .setFooter("Scarica oppure ti banno")
      .setTimestamp();
bot.on("message", (message) =>
{
if(message.content == "bot che ore sono?"|| message.content == "bot che ora è?"|| message.content == "bot che ora è" || message.content == "bot che ore sono" ) {
    var data= new Date();
    var ora = data.getHours();
    var minuti = data.getMinutes();
    message.channel.send("sono le "+ ora +":"+minuti);
}
if(message.content == "grazie" ){
    message.channel.send("prego!");
}
if( message.content == "thanks" ){
    message.channel.send("ur welcome!");
}
if(message.content == "lol" || message.content == "LOL" || message.content == "lel" || message.content == "lul" ){
    message.channel.send("lmao");
}
if( message.content == "bot aiutami") {
   message.reply("dimmi");
}
if( message.content == "bravo bot") {
    message.reply("Grazie:blush:");
 }
 if(message.content == "bruh"){
     message.channel.send("Bruh") 
 }
 if(message.content == "rido" || message.content =="RIDO"){
    message.channel.send("CRINGE");
}
if(message.content.startsWith("bot pulisci la chat")){
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send("non hai il permesso!");
        return
    }
   if(!message.guild.me.hasPermission("MANAGE_MESSAGES")){
       message.channel.send("non ho il permesso");
       return;
   }
   var count = message.content.slice(19);
   count = parseInt(count);

   if(!count || count > 100){
       message.channel.send("Inserisci un numero valido");
       return;
   }


   message.channel.bulkDelete(count, true);
   message.channel.send(count + " messaggi eliminati")
   .then(msg => {
       msg.delete({timeout:2000})
   })
}
if(message.content == "bot strano fa schifo"){
    message.author.send("cosa hai detto scusa?");
    message.channel.send("p!ban " + message.author.toString());
}
if(message.content == "cringe"){
    message.channel.send("super cringe");
}

if(message.content == "bot ho voglia di giocare" || message.content == "bot giochi"|| message.content == "bot voglio i giochi"){
    message.channel.send(embed);
}
if(message.content == "bot serverinfo"){
  var server = message.member.guild;
  var usernumber = server.memberCount;
  var serverdate = server.createdAt;

  var serverinfoembed = new discord.MessageEmbed()
     .setTitle("Server Info")
     .setThumbnail(server.iconURL())
     .addField("Server name", server.name, true)
     .addField("Server owner", server.owner.user.username, true)
     .addField("Server member", usernumber, true)
     .addField("Server region", server.region, true)
     .addField("Server roles", server.roles.cache.size, true)
     .addField("Server created on", serverdate.toDateString(), true);
     message.channel.send(serverinfoembed);
}
if(message.content.startsWith("bot userinfo")){
    if (message.content == "bot userinfo"){
        var utente = message.member;
    }
    else {
        var utente = message.mentions.members.first();
    }

if(!utente){
    message.channel.send("User not found");
    return;
}
var userinfoembed = new discord.MessageEmbed()
   .setTitle(utente.user.tag)
   .setThumbnail(utente.user.avatarURL())
   .addField("User ID", utente.user.id, true)
   .addField("Status", utente.user.presence.status, true)
   .addField("Account created on", utente.user.createdAt.toDateString(), true)
   .addField("Joined this server", utente.joinedAt.toDateString(), true);

   message.channel.send(userinfoembed);
  }
  if(message.content.startsWith("kick")){
var utenteKick = message.mentions.members.first();
 if(!message.member.hasPermission("KICK_MEMBERS")){
     message.channel.send("No");
     return;
 }
 if(!utenteKick.kickable){
     message.channel.send("Nope")
     return;
 }

 if(!utenteKick){
     message.channel.send("?")
 }
  utenteKick.kick()
  .then(()=> message.channel.send("<@"+ utenteKick + "> kickato"))
  }
  if(message.content.startsWith("ban")){
      var utenteBan = message.mentions.members.first();
      if(!message.member.hasPermission("BAN_MEMBERS")){
          message.channel.send("no");
          return;
      }
      if(!utenteBan){
          message.channel.send(":caspita:");
        return;
      }
      if(!utenteBan.bannable){
          message.channel.send("https://tenor.com/view/davie504-slap-slappers-davie-you-tuber-gif-16545714");
          return;
      }
      utenteBan.ban()
      .then(()=> message.channel.send("<@"+ utenteBan + "> bye bye"));
  }
});