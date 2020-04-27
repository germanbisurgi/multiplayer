const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()

const clientPath = path.normalize(__dirname + '/../client') 

console.log('clientPath: ', clientPath)

app.use(express.static(clientPath))

const server = http.createServer(app)

const io = socketio(server)

io.on('connection', (socket) => {
    console.log('connection')
    socket.emit('connection', 'Hi, you are connected')

    socket.on('message', (message) => {
        console.log('message'. message)
        io.emit('message', message)
    })
})

const port = 8080

server.on('error', (reason) => {
    console.log('server error', poreasonrt)
})

server.listen(port, () => {
    console.log('server started in port', port)
})

