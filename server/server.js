const express = require('express');
// cargamos el paquete de socket.io
const socketIO = require('socket.io');
// importacion del modulo de http permite levartr un servidor
const http = require('http');
const path = require('path');
const app = express();
// se monta el servidor con todo lo que se usa express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// IO =esta es la comunicacion con el backend
module.exports.io = socketIO(server);

require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});