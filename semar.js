// kirimprib(hasillrndy
const kirimprib =async(text,id) => { await semar.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {
      
        case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Apa sih dek')
        
            if(args == ""){
            psn = `SILAHKAN DI SIMAK
jika ingin update url server ketik *${prefix}${command}* url | vip.ditznesia.cf
             
jika ingin update username server ketik *${prefix}${command}* username | ditznesia
             
jika ingin update password server ketik *${prefix}${command}* password | @@##ditznesia##@@
             
jika ingin update ipaddress server ketik *${prefix}${command}* ip | 1.1.1.1
             
jika ingin tambah grup ketik *${prefix}${command}* grup | 120363024065162195@g.us
            `
            reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
            
            `
            reply(info)
                }
                
            }
            
            break
            
            case 'admin' :
            if (!isOwner && !msg.key.fromMe) return reply('Apa sih dek')
            id = msg.key.remoteJid
        
            info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT --
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
            
            `
            reply(info);
            
            break
            
            case 'cekidgrup':
            if (!isOwner && !msg.key.fromMe) return reply('Apa sih dek')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
          

    await semar.sendMessage(pengirim,{text: `HALO ${nama} \n\n ${id} \n\n`},{quoted:msg})

            break 


case 'menuweb': case 'listweb':
id = msg.key.remoteJid
if(validGrup(id,grups)){
listweb = `▬▭▬▭▬▭▬▭▬▭▬▭▬▭

┏━━⊱ LIST TAMPILAN WEB P
┣❏➥ .webp1: Mediafire 18+
┣❏➥ .webp9: Mobile Legends Claim
┣❏➥ .webp10: FreeFire Max Claim
┗━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
Ketik: .webp1
Untuk web Mediafire 18+
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
gunakan seperlunya saja`
reply(listweb)
}else{
reply("Apa sih dek")
}
break

// CREATE WEB
case 'webp1':
id = msg.key.remoteJid
        if(validGrup(id,grups)){
        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        
        
        
        reply("sedang membuat... tunggu sebentar\n\n_jangan spam agar bot tidak delay/offline_")

