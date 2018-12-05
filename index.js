const app = require("./src/app");
const http = require("http");
var program = require("commander");
program
    .version("1.0.0", "-v, --version")
    .option("-p, --port <n>", "Port Number", "8888")
    .parse(process.argv);

const port = program.port;
app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
    console.log("The server is running on port " + port + "...");
});