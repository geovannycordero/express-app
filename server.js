const http = require('http')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')

const app = express()

app.use(cors())
app.use(morgan('dev'))

const port = 3001;

const server = http.createServer(app)
server.listen(port)

server.on('listening', () => {
  console.log('Linstening on port', port)
})
