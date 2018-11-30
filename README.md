# DDRA
DDRA DNS REST API

# USAGE
* Without specifying port (Default port **8888** is used)

    `npm start` _**OR**_ `node index.js`
    
* Specifying port

    `npm start --port=1234` _**OR**_ `node index.js --port=1234` 
    
# API request & response 

1. IPv4
```javascript
{
    "data": [
        "216.58.196.69"
    ]
}
```

2. IPv6
```javascript
{
    "data": [
        "2404:6800:4009:809::2005"
    ]
}
```

3. MX
```javascript
{
    "data": [
        {
            "exchange": "alt1.gmail-smtp-in.l.google.com",
            "priority": 10
        },
        {
            "exchange": "alt4.gmail-smtp-in.l.google.com",
            "priority": 40
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
        }
    ]
}
```

4. NS         
```javascript
{
    "data": [
        "ns1.google.com",
        "ns4.google.com",
        "ns3.google.com",
        "ns2.google.com"
    ]
}
```

5. TXT
```javascript
{
    "data": [
        [
            "v=spf1 redirect=_spf.google.com"
        ]
    ]
}
```
6. SOA
```javascript
{
    "data": {
        "nsname": "ns1.google.com",
        "hostmaster": "dns-admin.google.com",
        "serial": 223449308,
        "refresh": 900,
        "retry": 900,
        "expire": 1800,
        "minttl": 60
    }
}
```

7. ANY
```javascript
{
    "data": [
        {
            "address": "216.58.196.69",
            "ttl": 88,
            "type": "A"
        },
        {
            "exchange": "alt1.gmail-smtp-in.l.google.com",
            "priority": 10,
            "type": "MX"
        },
        {
            "exchange": "alt3.gmail-smtp-in.l.google.com",
            "priority": 30,
            "type": "MX"
        },
        {
            "exchange": "alt4.gmail-smtp-in.l.google.com",
            "priority": 40,
            "type": "MX"
        },
        {
            "exchange": "alt2.gmail-smtp-in.l.google.com",
            "priority": 20,
            "type": "MX"
        },
        {
            "exchange": "gmail-smtp-in.l.google.com",
            "priority": 5,
            "type": "MX"
        },
        {
            "value": "ns1.google.com",
            "type": "NS"
        },
        {
            "value": "ns2.google.com",
            "type": "NS"
        },
        {
            "value": "ns4.google.com",
            "type": "NS"
        },
        {
            "value": "ns3.google.com",
            "type": "NS"
        }
    ]
}
```
