const { cmd, commands } = require('../command');
const config = require('../config');

// repo info
cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "👨‍💻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello there 𝐈𝐑𝐅𝐀𝐍 𝐖𝐀𝐇𝐆𝐀 User! 👋🏻* 

> Simple , Straight Forward But Loaded With Features 🎊, Meet 𝐈𝐑𝐅𝐀𝐍 𝐖𝐀𝐇𝐆𝐀 WhatsApp Bot.

*Thanks for using 𝐈𝐑𝐅𝐀𝐍 𝐖𝐀𝐇𝐆𝐀 🇵🇰* 

> contact 𝐈𝐑𝐅𝐀𝐍 𝐖𝐀𝐇𝐆𝐀 ⤵️

https://wa.me/+923261761538`;

        // Send image with caption
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/rbRfhpd/file-6273.jpg` }, 
            caption: dec, 
            contextInfo: { 
                mentionedJid: [m.sender], 
                forwardingScore: 999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: '120363358310754973@newsletter', 
                    newsletterName: 'Mʀ-Sʜᴀʙᴀɴ', 
                    serverMessageId: 143 
                } 
            } 
        }, { quoted: mek });

        // Send audio with contextInfo
        await conn.sendMessage(from, {
            audio: { url: 'https://i.ibb.co/rbRfhpd/file-6273.jpg' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender], 
                forwardingScore: 999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: '120363358310754973@newsletter', 
                    newsletterName: 'Mʀ-Sʜᴀʙᴀɴ', 
                    serverMessageId: 143 
                } 
            }
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
