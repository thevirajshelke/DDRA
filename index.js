const app = require("./src/app");
const http = require('http');
const port = normalizePort(process.env.PORT || '8888');

app.set('port', port);

const server = http.createServer(app);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

server.listen(port, () => {
    console.log("The server is running on 8888...");
});