/*
author：langkhach270389
[mitm]
hostname = api.busuu.com

[rewrite_local]
^https:\/\/api\.busuu\.com\/users\/me* url script-response-body https://raw.githubusercontent.com/Ika2i-Shinji/Quantumult-X/main/Script/Busuu.js
*/

var obj = JSON.parse($response.body);
obj.data.is_premium= true;
obj.data.access.tier= "plus";
$done({body: JSON.stringify(obj)});
