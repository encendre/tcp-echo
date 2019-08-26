const net = require('net')

module.exports = function (options) {
  const server = new net.Server(options, socket => {
    socket.setEncoding('utf8')
    socket.on('data', data => {
      socket.write(data)
    })
  })

  return server
}
