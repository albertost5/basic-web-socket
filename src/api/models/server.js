const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { socketController } = require('../sockets/socket.controller');

class Server {
    
    constructor( routes = [] ) {
        this.routes = routes;
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);


        // Middlewares
        this.middlewares();
        
        // Initialize controllers
        this.initializeControllers();

        // Sockets config
        this.sockets();
    }

    initializeControllers() {
        // this.routes.forEach( routes => {
        //     this.app.use( '/',  routes.registerRoutes() );
        // });

        console.log(`Registered ${ this.routes.length } routes successfully!`);
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.static('public') );
    }
    
    sockets() {
        this.io.on( 'connection', socketController);
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log(`Basic-web-socket listening on port ${ this.port }...`)
        });
    }
}


module.exports = Server;
