const express = require("express");
const router = express.Router();
const utils = require("../controllers/dns");

router.get("/", async (req, res) => {
    res.json({
        data: "The server is up & running!"
    });
});

router.post("/resolveIPv4", async (req, res) => {
    let resp = await utils.resolveIPv4(req.body.domain, req.body.ttl);
    res.json({
        data: resp
    });
});

router.post("/resolveIPv6", async (req, res) => {
    let resp = await utils.resolveIPv6(req.body.domain, req.body.ttl);
    res.json({
        data: resp
    });
});

router.post("/resolveCNAME", async (req, res) => {
    let resp = await utils.resolveCNAME(req.body.domain);
    res.json({
        data: resp
    });
});

router.post("/resolveMX", async (req, res) => {
    let resp = await utils.resolveMX(req.body.domain);
    res.json({
        data: resp
    });
});

router.post("/resolveNS", async (req, res) => {
    let resp = await utils.resolveNS(req.body.domain);
    res.json({
        data: resp
    });
});

router.post("/resolvePTR", async (req, res) => {
    let resp = await utils.resolvePTR(req.body.domain);
    res.json({
        data: resp
    });
});

router.post("/resolveSOA", async (req, res) => {
    let resp = await utils.resolveSOA(req.body.domain);
    res.json({
        data: resp
    });
});

router.post("/resolveSRV", async (req, res) => {
    let resp = await utils.resolveSRV(req.body.domain);
    res.json({
        data: resp
    });
});

router.post("/resolveTXT", async (req, res) => {
    let resp = await utils.resolveTXT(req.body.domain);
    res.json({
        data: resp
    });
});

router.post("/resolveANY", async (req, res) => {
    let resp = await utils.resolveANY(req.body.domain);
    res.json({
        data: resp
    });
});

// router.post("batchResolveMx", async (req, res) => {

//     // res.json({
//     //     data: resp
//     // });
// });

module.exports = router;