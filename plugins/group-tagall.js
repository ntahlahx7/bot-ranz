let handler = async(m, { conn, text, participants }) => {
  let teks = `   ⊙─〔 ıll 𝐓𝐀𝐆𝐀𝐋𝐋•𝐑𝐀𝐍𝐙 llı 〕─⊙
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` ➜ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n↻𝚁𝙰𝙽𝚉•𝙱𝙾𝚃𝚣 𝚃𝙰𝙶𝙰𝙻𝙻↻`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall|tagal|tall|t)$/i

handler.group = true
handler.admin = true
handler.botadmin = true
module.exports = handler
