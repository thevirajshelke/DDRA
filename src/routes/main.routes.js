const express = require("express");
const router = express.Router();
const dns = require("../controllers/dns");
const utils = require("../controllers/utils");

router.get("/", async (req, res) => {
    res.json(utils.formatResponse("success", "The server is up & running!", null, null));
});

router.post("/resolveIPv4", async (req, res) => {
    try {
        let resp = await dns.resolveIPv4(req.body.domain, req.body.ttl);
        res.json(utils.formatResponse("success", "Domain is resolved into IPv4 record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err, "", null, err));
    }
});

router.post("/resolveIPv6", async (req, res) => {
    try {
        let resp = await dns.resolveIPv6(req.body.domain, req.body.ttl);
        res.json(utils.formatResponse("success", "Domain is resolved into IPv6 record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err));
    }
});

router.post("/resolveCNAME", async (req, res) => {
    try {
        let resp = await dns.resolveCNAME(req.body.domain);
        res.json(utils.formatResponse("success", "Domain is resolved into CNAME record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err));
    }
});

router.post("/resolveMX", async (req, res) => {
    try {
        let resp = await dns.resolveMX(req.body.domain);
        res.json(utils.formatResponse("success", "Domain is resolved into MX record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err));
    }
});

router.post("/resolveNS", async (req, res) => {
    try {
        let resp = await dns.resolveNS(req.body.domain);
        res.json(utils.formatResponse("success", "Domain is resolved into NS record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err));
    }
});

router.post("/resolvePTR", async (req, res) => {
    try {
        let resp = await dns.resolvePTR(req.body.domain);
        res.json(utils.formatResponse("success", "Domain is resolved into PTR record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err));
    }
});

router.post("/resolveSOA", async (req, res) => {
    try {
        let resp = await dns.resolveSOA(req.body.domain);
        res.json(utils.formatResponse("success", "Domain is resolved into SOA record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err));
    }
});

router.post("/resolveSRV", async (req, res) => {
    try {
        let resp = await dns.resolveSRV(req.body.domain);
        res.json(utils.formatResponse("success", "Domain is resolved into SRV record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err));
    }
});

router.post("/resolveTXT", async (req, res) => {
    try {
        let resp = await dns.resolveTXT(req.body.domain);
        res.json(utils.formatResponse("success", "Domain is resolved into TXT record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err));
    }
});

router.post("/resolveANY", async (req, res) => {
    try {
        let resp = await dns.resolveANY(req.body.domain);
        res.json(utils.formatResponse("success", "Domain is resolved into ANY record(s)", resp, null));
    } catch (err) {
        res.json(utils.formatResponse("failure", "", null, err));
    }
});

// router.post("batchResolveMx", async (req, res) => {

//     // res.json({
//     //     data: resp
//     // });
// });

module.exports = router;