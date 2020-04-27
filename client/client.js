const socket = io()

const messages = document.querySelector('#messages')
const message = document.querySelector('#message')
const send = document.querySelector('#send')
const logs = document.querySelector('#logs')


const appendMessage = (message) => {
    const p = document.createElement('p')
    p.innerText = '- ' + message
    messages.appendChild(p)
}

send.addEventListener('click', () => {
    console.log(message.value)
    socket.emit('message', message.value)
})


socket.on('connection', (message) => {
    appendMessage(message)
})

socket.on('message', (message) => {
    appendMessage(message)
})


