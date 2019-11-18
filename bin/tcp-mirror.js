#!/usr/bin/env node

const argv = require('optimist').argv

const echo = require('../lib')()

if (argv.h || argv.help) {
  console.log(`
usage: tcp-echo [options]

options:
  -h, --help \t\t Show help
  -p, --port \t\t Port to use [7]
`)
  process.exit(0)
}

const port = argv.port || argv.p || 7

echo.listen(port)
