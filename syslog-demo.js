var console = require('./index.js')('syslog-console-demo')
var i = 1

setInterval(function(){
	console.log("Order test " + i)
	i++;
}, 100)
