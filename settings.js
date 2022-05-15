const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa : 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz' : 'jb7Qt7MC', // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

global.self_mode = false
global.autobio = true
global.msg_connected = false
global.user_register = false
global.anti_delete = true
global.anticall = true
global.auto_welcome_msg = true
global.auto_leave_msg = true
global.prefix = "."
global.language = "ind"
global.ownerNumberr = "6283822910734"
global.ownerbot = ['6283822910734@s.whatsapp.net'] // .owner
global.ownername = "ZoonBot"
global.botname = "ZoonBot"
global.thumb = "thumbnail_1.jpg"
global.thumbnail ="thumbnail_2.jpg"
global.fakethumb ="thumbnail_1.jpg"
global.donasi ="donasi.jpg"
global.captionpay ="Scan untuk melakukan pembayaran"
global.fake = "「  ZoonBot  」\nCreated By ZoonGT"
global.alphaVersion = [2, 2143, 3] //WhatsApp web version

/* Available type menu

['document', 'troli', 'troli2', 'katalog', 'katalog2', 'list', 'location', 'image']

*/
global.typeMenu = 'document'

//foto menu size maks 50kb
global.allmenu = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.downloadcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.groupcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.convertcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.funcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.makercmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.othercmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.ownercmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.storagecmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.tagcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.upcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.cecancmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.telegramcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.nsfwcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.asupancmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.imageeffectcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.cogancmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.quotescmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.animecmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.textprocmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.photooxycmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.soundcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.kerangcmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.primboncmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.islamiccmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.ephoto360cmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'
global.logocmd = 'https://telegra.ph/file/d418b87cffa0ff0ace4e0.jpg'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	delete require.cache[file]
	require(file)
})
