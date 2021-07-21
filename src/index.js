const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const chalk = require('chalk');

// Configurate the server with socket.io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

// Setting up a static folder
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

// Listen to the client connection
io.on('connection', (socket) => {

    // Client join event
    socket.on('joinInitMap', () => {
        console.log(chalk.bold.white.bgBlue(`We have a new connection: ${socket.id}!`));

        socket.emit('consoleMessage', 'You were connected to the socket');
    })

    socket.on('updateGeolocation', ({ longitude, latitude }) => {
        console.log(longitude, latitude)
        id = socket.id;
        socket.broadcast.emit('updatePoint', ({ longitude, latitude, id }))
    })
})

// Listen to the server
server.listen(port, () => {
    console.log('Server is up on port ' + port);
});
