const express = require("express");
const dnsPromises = require('dns').promises;
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        data: "The server is up & running!"
    });
});

router.post('/resolveMx', async (req, res) => {
    let resp = await dnsPromises.resolveMx(req.body.domain);
    console.log(resp);
    res.json({
        data: resp
    })
});

module.exports = router