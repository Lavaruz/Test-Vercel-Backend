const http = require('http')
const app = require('./api/index')

const server = http.createServer(app)
const port = process.env.PORT || 3000

server.listen(port, () => console.log('server run at port ' + port))