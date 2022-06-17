const socketController = socket => { 

    console.log(`Client ${ socket.id } connected..`);

    socket.on( 'disconnect', () => {
        console.log(`Client ${ socket.id } disconnected.. `);
    });

    socket.on( 'send-message', ( payload ) => {
        socket.broadcast.emit( 'send-message-client', payload );
    });

}


module.exports = {
    socketController
}
