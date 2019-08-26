# http-grabber

Log everything you get

## usage

### cli
```bash
npx tcp-mirror
npx tcp-mirror -h
```

### node
```bash
npm i tcp-mirror
```

```js
const createMirror = require('tcp-mirror')

// options are passed to constructor net.Server(options)
// mirror is the tcp server returned
const mirror = createMirror(options)

const port = 1234
mirror.listen(port)
mirror.on('connection', socket => {
  console.log(`Connection from ${socket.address().address}`)
})
```
