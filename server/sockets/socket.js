const { io } = require('../server')


// funcion para conexion
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('EnviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido a esta aplicacion'

    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    });

    // Escuchar el cliente
    client.on('EnviarMensaje', (data, callback) => {

        console.log(data);
        // broadcast es para enviar a todos los usuarios que se conectan al servidor
        client.broadcast.emit('EnviarMensaje', data);



        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });

        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL !!!!!!!!!!!!!!!'
        //     });
        // }


    });


});