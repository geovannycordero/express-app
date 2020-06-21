const http = require('http')
const cors = require('cors')
const dotenv = require("dotenv")
const morgan = require('morgan')
const express = require('express')

const userRouter = require('./routes/user')

dotenv.config()

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded( { extended: true }))

const port = 3001;

app.use('/users', userRouter)

const server = http.createServer(app)
server.listen(port)

server.on('listening', () => {
  console.log('Linstening on port', port)
})
