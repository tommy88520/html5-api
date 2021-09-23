const WebSocket = require('ws');

const createChatServer = server => {
    const wsServer = new WebSocket.Server({server});
    const map = new Map();

    wsServer.on('connection', (ws, req)=>{
        console.log('size:', wsServer.clients.size);
        console.log('ip:', req.connection.remoteAddress);

        ws.on('message', (message, isBinary)=>{
            // ws v8 多了 isBinary 參數
            console.log('isBinary:', isBinary);
            console.log(message, message.toString());
            ws.send(message.toString());
        });

        ws.send('連線了！');
    });
};

module.exports = createChatServer;