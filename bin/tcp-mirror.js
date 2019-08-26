#!/usr/bin/env node

const argv = require('optimist').argv

const mirror = require('../lib')()

if (argv.h || argv.help) {
  console.log(`
usage: tcp-mirror [options]

options:
  -h, --help \t\t Show help
  -p, --port \t\t Port to use [8080]
`)
  process.exit(0)
}

const port = argv.port || argv.p || 8080

mirror.listen(port)

mirror.on('listening', () => {
  console.log(`[tcp-mirror] listening on ${port}`)
})

mirror.on('connection', socket => {
  const { address } = socket.address()
  console.log(`[tcp-mirror] connection from ${address} established`)

  socket.on('close', () => {
    console.log(`[tcp-mirror] connection from ${address} closed`)
  })
})
