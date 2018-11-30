const dnsPromises = require("dns").promises;

async function resolveIPv4(domain, timetolive = false) {
    try {
        return await dnsPromises.resolve4(domain, {
            ttl: timetolive
        });
    } catch (err) {
        console.log(err);
        throw err;
    }

}

async function resolveIPv6(domain, timetolive = false) {
    try {
        return await dnsPromises.resolve6(domain, {
            ttl: timetolive
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolveCNAME(domain) {
    try {
        return await dnsPromises.resolveCname(domain);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolveMX(domain) {
    try {
        return await dnsPromises.resolveMx(domain);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolveNS(domain) {
    try {
        return await dnsPromises.resolveNs(domain);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolvePTR(domain) {
    try {
        return await dnsPromises.resolvePtr(domain);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolveSOA(domain) {
    try {
        return await dnsPromises.resolveSoa(domain);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolveSRV(domain) {
    try {
        return await dnsPromises.resolveSrv(domain);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolveNAPTR(domain) {
    try {
        return await dnsPromises.resolveNaptr(domain);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolveTXT(domain) {
    try {
        return await dnsPromises.resolveTxt(domain);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolveReverse(ipaddress) {
    try {
        return await dnsPromises.reverse(ipaddress);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function resolveAny(domain) {
    try {
        return await dnsPromises.resolveAny(domain);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function batchResolveMX() {
    try {
        // console.log("hello");
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    resolveIPv4,
    resolveIPv6,
    resolveCNAME,
    resolveMX,
    resolveNS,
    resolvePTR,
    resolveSOA,
    resolveSRV,
    resolveNAPTR,
    resolveTXT,
    resolveReverse,
    resolveAny,
    batchResolveMX
};