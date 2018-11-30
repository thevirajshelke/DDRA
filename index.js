const app = require("./src/app");
const http = require("http");
let port = "8888";

process.argv.forEach(function (val) {
    if (val.indexOf("--port=") !== -1) {
        port = val.split("=")[1];
    }
});

app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
    console.log("The server is running on port " + port + "...");
});