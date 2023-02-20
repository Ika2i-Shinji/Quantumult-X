/*
author：langkhach270389
[mitm]
hostname = api.busuu.com

[rewrite_local]
^https:\/\/api\.busuu\.com\/users\/me* url script-response-body https://raw.githubusercontent.com/langkhach270389/Quantumult-X-LK/master/Scripts/langkhach/busuu.js
*/

var obj = JSON.parse($response.body);
obj.data.is_premium= true;
obj.data.access.tier= "plus";
$done({body: JSON.stringify(obj)});
