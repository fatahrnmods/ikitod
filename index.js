const { default: makeWASocket, DisconnectReason, useSingleFileAuthState} = require('@adiwajshing/baileys')
const { state, saveState } = useSingleFileAuthState('./session.json')
const fs = require('fs')
const pino = require('pino')
const connectKeWA = () => {
const semar = makeWASocket({logger:pino({level:'silent'}),printQRInTerminal: true,auth: state,browser: ["DITZNESIA", "Dekstop", "3.0"]})

require('./semar.js')
nocache('./semar.js', module => console.log(`"${module}" Updated!`))
