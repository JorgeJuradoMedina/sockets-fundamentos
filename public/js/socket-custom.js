 // var sirve para que la compatibilidad de los navegadroes sea global
 var socket = io();
 // escuchar sucesos (on)

 socket.on('connect', function() {
     console.log('Conectado al servidor');
 });

 socket.on('disconnect', function() {
     console.log('Se perdio la conexion con el servidor')
 });
 // enviar informacion (emit)
 socket.emit('EnviarMensaje', {
     usuario: 'Jorge',
     mensaje: 'Hola mundo Node'
 }, function(resp) {
     console.log('respuesta server: ', resp);
 });

 // escuchar informacion
 socket.on('EnviarMensaje', function(mensaje) {
     console.log('Servidor', mensaje);
 });