import fetch from 'node-fetch';
var url='http://localhost:38041/api';
var customerId='4567';
fetch(`${url}/getcustomerinvoicedetails?customerId=${customerId}`)
    .then(res => 
        res.json()
        )
    .then(data => console.log(data))
    .catch((err) => console.log(err));