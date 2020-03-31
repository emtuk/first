const Discord = require('discord.js');
const {
	prefix,
	token,
} = require('./config.json');
const ytdl = require('ytdl-core');


const client = new Discord.Client();

const queue = new Map();

var sayac = 0;


client.on('message', msg => {
  if(!msg.author.bot){
    console.log(msg.content);
  if (msg.content === 'buday') {
		msg.channel.send('<:husamettin:485139904184057876>');
	}
  else if(msg.content === '!hakkında'){
    msg.channel.send('Oyuncu Ailesi Yerli ve Milli Botu\nYapımcılar: budy & emtuk\nKuruluş Tarihi: 24.03.2020\n');
  }
	else if(msg.content === 'ercü'){
    msg.channel.send('rek');
  }
	else if(msg.content === 'sao'){
    msg.channel.send('kolpa');
  }
	else if(msg.content === '!komutlar'){
    msg.channel.send('!çal link: Şarkı çalma\n!geç: Şarkıyı geçip sıradaki şarkıyı çalar\n!dur: Listeyi durdurur\n!hakkında: Bot hakkında bilgi\n!tanıtım: Tanıtım videomuzun linki\n!server: sunucu hakkında bilgiler\n!user-info:kullanıcı bilgilerine ulaşmak için\n!avatar:Avatarınız gösterilir');
  }
  else if(msg.content === "!tanıtım"){
    msg.channel.send('Tanıtım videomuz: https://www.youtube.com/watch?v=emBggEEKEDM&feature=youtu.be')
  }
  else if (msg.content === 'buğday') {
		msg.channel.send('mal');
	}
  else if(msg.content === '<:husamettin:485139904184057876>'){
    msg.channel.send('<:husamettin:485139904184057876>');
  }
  else if(msg.content === 'sg'){
    msg.channel.send('<:nah:485141503761711104>');
  }
  else if(msg.content === 'siktir'){
    msg.channel.send('<:nah:485141503761711104>');
  }
  else if (msg.content === 'beep') {
		msg.channel.send('Boop.');
	}
  else if (msg.content === 'dame tu cosita') {
		msg.channel.send('ah ah dame tu cosita ah ay');
	}
  else if(msg.content ==='❤️'){
    msg.channel.send(':heart:');
  }
  else if(msg.content === 'sa'){
    msg.channel.send('as');
  }
  else if(msg.content === 'corona'){
    msg.channel.send('chinese virus');
  }
	else if(msg.content.indexOf('naber')!=-1){
    msg.channel.send('iyidir knk senden');
  }
	else if(msg.content.indexOf('amınoğlu')!=-1){
    msg.channel.send('kess lan amına kodumun götveren piçi');
  }
	else if(msg.content.indexOf('anne')!=-1){
    msg.channel.send('anancılık yapma piç');
  }
	else if(msg.content.indexOf('gel')!=-1){
    msg.channel.send('bırahın gelsin gel hele gel');
  }
	else if(msg.content.indexOf('otur')!=-1){
    msg.channel.send('dikkat et de ben varken oturma');
  }
	else if(msg.content.indexOf('aaa')!=-1){
    msg.channel.send('kikikikikikikikikikiki');
  }
	else if(msg.content.indexOf('aA')!=-1){
    msg.channel.send('kikikikikikikikikikiki');
  }
	else if(msg.content.indexOf('napı')!=-1){
    msg.channel.send('seni');
  }
	else if(msg.content.indexOf('anan')!=-1){
    msg.channel.send('anancılık yapma piç');
  }
	else if(msg.content === 'bendende iyi'){
    msg.channel.send('iyi allah iyilik versin');
  }
	else if(msg.content === '20'){
    msg.channel.send('hmm çıtırsın daha');
  }

  else if(msg.content === 'kenan'){
    msg.channel.send('<:kenan:485109075546472449>');
  }
  else if(msg.content === 'emir'){
    msg.channel.send('kral');
  }
  else if(msg.content === 'onat'){
    msg.channel.send('bitter çikolata');
  }
  else if(msg.content === 'onur'){
    msg.channel.send('boşların kralı');
  }
  else if(msg.content === 'ateş'){
    msg.channel.send('toxic');
  }
  else if(msg.content === 'özgür'){
    msg.channel.send('<:zqrrr:490297974442950665>'+'el capitano');
  }
  else if(msg.content === 'ozan'){
    msg.channel.send('sarışın bomba');
  }
  else if(msg.content === 'cemil'){
    msg.channel.send('the rainbow boy');
  }
  else if(msg.content === 'berk'){
    msg.channel.send('sıktı yaa');
  }
  else if(msg.content === ':heart:'){
    msg.channel.send(':heart:');
  }
  else if(msg.content === '<3'){
    msg.channel.send('<3');
  }
  else if(msg.content === 'kral'){
    msg.channel.send('emir');
  }
  else if(msg.content === 'mal'){
    msg.channel.send('deyince akla onun adı gelir buday buday');
  }
}
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();


	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
  else if (command === 'beep') {
		message.channel.send('Boop.');
	}
  else if(command === 'kenan'){
    message.channel.send('mazikuzi');
  }
  else if(command === 'emir'){
    message.channel.send('kral');
  }
  else if(command === 'kral'){
    message.channel.send('emir');
  }
  else if(command === 'mal'){
    message.channel.send('deyince akla onun adı gelir buday buda');
  }
  else if(command === 'onat'){
    message.channel.send('bitter çikolata');
  }
  else if(command === 'buday'){
    message.channel.send('mal');
  }
  else if(command === 'onur'){
    message.channel.send('boşların kralı');
  }
  else if(command === 'boşların kralı'){
    message.channel.send('onur');
  }
  else if(command === 'ateş'){
    message.channel.send('the morgana player');
  }
  else if(command === 'özgür'){
    message.channel.send('el capitano');
  }
  else if(command === 'ozan'){
    message.channel.send('sarışın bomba');
  }
  else if(command === 'cemil'){
    message.channel.send('the rainbow boy');
  }
  else if(command === 'berk'){
    message.channel.send('sıktı yaa');
  }



   else if (command === 'server') {
		message.channel.send(`Sunucu ismi:  ${message.guild.name}\nToplam kişi sayısı:  ${message.guild.memberCount}`);
	} else if (command === 'user-info') {
		message.channel.send(`Kullanıcı adınız: ${message.author.username}\nID'niz:  ${message.author.id}\nSon mesajınız:  ${message.author.lastMessage}\nAvatar: ${message.author.displayAvatarURL()}`);
	} else if (command === 'info') {
		if (!args.length) {
			return message.channel.send(`Hiçbişey girmedin, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	} else if (command === 'at') {
		if (!message.mentions.users.size) {
			return message.reply('Atmak istiyosan birini tagle aq malı');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`Atmak istediğiniz kişi:  ${taggedUser.username}`);
	} else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Avatar'ın: <${message.author.displayAvatarURL({ dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
		});

		message.channel.send(avatarList);
	} else if (command === 'sil') {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('Sayı girsene lan amk');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('1 ile 100 arasında sayı gir lan dümbük');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
});


client.once('ready', () => {
	console.log('Ready!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(`${prefix}çal`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}geç`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}dur`)) {
		stop(message, serverQueue);
		return;
	} else {
	//	message.channel.send('Geçerli bi komut gir.')
	}
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voice.channel;
	if (!voiceChannel) return message.channel.send('Bir odada olmalısın.');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('Lan kanala katılmak için izin lazım');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};
		message.channel.send('Şarkı çalınıyor');
		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			//while()
			play(message.guild, queueContruct.songs[sayac]);

			//sayac=sayac+1;
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} sıraya eklendi.`);
	}
}

function skip(message, serverQueue) {
	if (!message.member.voice.channel) return message.channel.send('Bir odada olmalısınız.');
	if (!serverQueue) return message.channel.send('Geçecek şarkı mı var amk');
	//serverQueue.connection.dispatcher.end();
	play(message.guild, serverQueue.songs[sayac]);

}

function stop(message, serverQueue) {
	if (!message.member.voice.channel) return message.channel.send('Müzik durdurmak için bi kanalda olmak lazım');
	serverQueue.songs = [];
	sayac=0;
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {

	const serverQueue = queue.get(guild.id);
	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('end', () => {
			console.log('Müzik bitti');
			serverQueue.songs.shift();
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);


}

client.login(token);
