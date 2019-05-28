import socket from 'socket.io-client'

const io = socket('http://localhost:3333')

export default io