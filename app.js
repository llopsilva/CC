
var app = require('./config/server.js');

var server = app.listen(8000, function(){
    console.log('Servidor Online!')
});

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
    console.log('Usuario Entrou');

    socket.on('disconnect', function(){
        console.log('Usuario desconectou')
    })
})
