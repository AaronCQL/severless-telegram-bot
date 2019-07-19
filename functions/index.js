const Telegraf = require('telegraf')
const functions = require('firebase-functions')

const bot = new Telegraf(functions.config().telegrambot.key)

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))

bot.launch()

exports.bot = functions.https.onRequest((req, res) => {
  bot.handleUpdate(req.body, res)
})