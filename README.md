# tcp-echo

receives what you send

## usage

### cli
```bash
npx tcp-echo
npx tcp-echo -h
```

### node
```bash
npm i tcp-echo
```

```js
const createEchoServer = require('tcp-echo')

// options are passed to constructor net.Server(options)
// echo is the tcp server returned
const echoServer = createEchoServer(options)

const port = 1234

echoServer.on('connection', socket => {
  console.log(`New connection from ${socket.address().address}`)
})

echoServer.listen(port)
```
