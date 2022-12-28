/*

[rewrite_local]

https?:\/\/.*\.xmind\..*\/_res\/devices url script-response-body https://github.com/Ika2i-Shinji/Quantumult-X/new/main/Script/XMind.js

[mitm] 
hostname = www.xmind.cn


*/


let obj = JSON.parse($response.body);

obj = {
  "raw_data": "S0MY6Wu5wpkW52RE5XmMkSMfTBvnytTwIJODrtVDjnA0axrORbnv9gh1RC4W3/ejTfQhNBb7CVxxpbYnBBk2tHc4gAODhsuGpHkltYNL/P5dfORSpdbiNkAZr5aBBbHS/dNlaYjLYyBkq9Ohfe0QS9PeXOWLbDdNA6kqidLJysw=",
  "license": {
    "status": "sub",
    "expireTime": 9999999999999
  },
  "_code": 200
}
  
$done({body: JSON.stringify(obj)});
