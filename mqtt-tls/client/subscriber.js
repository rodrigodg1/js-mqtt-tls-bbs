'use strict'

  const mqtt = require('mqtt')
  const fs = require('fs')
  const path = require('path')
  const KEY = fs.readFileSync(path.join(__dirname, '/client.key'))
  const CERT = fs.readFileSync(path.join(__dirname, '/client.crt'))
  const TRUSTED_CA_LIST = fs.readFileSync(path.join(__dirname, '/ca.crt'))

const PORT = 8883
const HOST = 'localhost'

const options = {
  port: PORT,
  host: HOST,
  key: KEY,
  cert: CERT,
  rejectUnauthorized: false,
  // The CA list will be used to determine if server is authorized
  ca: TRUSTED_CA_LIST,
  protocol: 'mqtts'
}

const client = mqtt.connect(options)




client.subscribe('messages')


client.on('message', function (topic, message) {
  console.log(message.toString())
})