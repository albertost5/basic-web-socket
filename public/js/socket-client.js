const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const btnSend = document.querySelector('#btnSend');
const txtBox = document.querySelector('#txtBox');

const socket = io();

socket.on( 'connect', () => {

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on( 'disconnect', () => {

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on( 'send-message-client', ( payload ) => {
    console.log('Received: ', payload);
});

btnSend.addEventListener('click', () => {
    const message = txtBox.value;

    console.log(message);

    socket.emit( 'send-message', message )

});