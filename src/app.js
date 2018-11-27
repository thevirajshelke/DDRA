(function () {
    const express = require("express");
    const bodyParser = require("body-parser");
    const routes = require("../src/routes/main.routes");
    const app = express();

    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(bodyParser.json());

    app.use("/", routes);
    module.exports = app;
})();