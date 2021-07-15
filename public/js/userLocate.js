// Setting up a connection with the server
const socket = io();

socket.emit('joinInitMap');

socket.on('consoleMessage', message => {
    console.log(message);
})