const WebSocket = require('ws');

const createEchoServer = server => {
    const wsServer = new WebSocket.Server({server});

    wsServer.on('connection', (ws, req)=>{
        console.log('size:', wsServer.clients.size);
        console.log('ip:', req.connection.remoteAddress);

        ws.on('message', message=>{
            ws.send(message);
        });

        ws.send('連線了！');
    });
};

module.exports = createEchoServer;

