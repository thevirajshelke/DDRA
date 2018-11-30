1. IPv4
**Request**
```javascript
{
	"domain": "gmail.com"
}
```
**Response**
```javascript
{
    "status": "success",
    "message": "Domain is resolved into IPv4 record(s)",
    "data": [
        "172.217.166.69"
    ],
    "error": null
}
```

1. IPv6
```javascript
{
    "status": "success",
    "message": "Domain is resolved into IPv6 record(s)",
    "data": [
        "2404:6800:4009:80d::2005"
    ],
    "error": null
}
```

3. MX
```javascript
{
    "status": "success",
    "message": "Domain is resolved into MX record(s)",
    "data": [
        {
            "exchange": "alt1.gmail-smtp-in.l.google.com",
            "priority": 10
        },
        {
            "exchange": "alt3.gmail-smtp-in.l.google.com",
            "priority": 30
        },
        {
            "exchange": "alt2.gmail-smtp-in.l.google.com",
            "priority": 20
        },
        {
            "exchange": "gmail-smtp-in.l.google.com",
            "priority": 5
        },
        {
            "exchange": "alt4.gmail-smtp-in.l.google.com",
            "priority": 40
        }
    ],
    "error": null
}
```

4. NS         
```javascript
{
    "status": "success",
    "message": "Domain is resolved into NS record(s)",
    "data": [
        "ns4.google.com",
        "ns1.google.com",
        "ns2.google.com",
        "ns3.google.com"
    ],
    "error": null
}
```

5. TXT
```javascript
{
    "status": "success",
    "message": "Domain is resolved into TXT record(s)",
    "data": [
        [
            "v=spf1 redirect=_spf.google.com"
        ]
    ],
    "error": null
}
```
6. SOA
```javascript
{
    "status": "success",
    "message": "Domain is resolved into SOA record(s)",
    "data": {
        "nsname": "ns1.google.com",
        "hostmaster": "dns-admin.google.com",
        "serial": 223488738,
        "refresh": 900,
        "retry": 900,
        "expire": 1800,
        "minttl": 60
    },
    "error": null
}
```

7. ANY
```javascript
{
    "status": "success",
    "message": "Domain is resolved into ANY record(s)",
    "data": [
        {
            "address": "172.217.166.69",
            "ttl": 299,
            "type": "A"
        },
        {
            "address": "2404:6800:4009:80d::2005",
            "ttl": 0,
            "type": "AAAA"
        },
        {
            "exchange": "alt4.gmail-smtp-in.l.google.com",
            "priority": 40,
            "type": "MX"
        },
        {
            "exchange": "gmail-smtp-in.l.google.com",
            "priority": 5,
            "type": "MX"
        },
        {
            "exchange": "alt3.gmail-smtp-in.l.google.com",
            "priority": 30,
            "type": "MX"
        },
        {
            "exchange": "alt2.gmail-smtp-in.l.google.com",
            "priority": 20,
            "type": "MX"
        },
        {
            "exchange": "alt1.gmail-smtp-in.l.google.com",
            "priority": 10,
            "type": "MX"
        },
        {
            "value": "ns2.google.com",
            "type": "NS"
        },
        {
            "value": "ns3.google.com",
            "type": "NS"
        },
        {
            "value": "ns1.google.com",
            "type": "NS"
        },
        {
            "value": "ns4.google.com",
            "type": "NS"
        },
        {
            "entries": [
                "v=spf1 redirect=_spf.google.com"
            ],
            "type": "TXT"
        },
        {
            "nsname": "ns1.google.com",
            "hostmaster": "dns-admin.google.com",
            "serial": 223488738,
            "refresh": 900,
            "retry": 900,
            "expire": 1800,
            "minttl": 60,
            "type": "SOA"
        }
    ],
    "error": null
}
```
