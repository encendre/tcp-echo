const net = require('net')

module.exports = function (options) {
  const server = new net.Server(options, socket => {
    socket.pipe(socket)
  })

  return server
}
