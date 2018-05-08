/**
 * http://usejsdoc.org/
 */

var port = 33333;
var host = '10.2.65.160';

var dgram = require('dgram');
var msg = new Buffer('My Kung Fu is good!');

var client = dgram.createSocket('udp4');

client.send(msg, 0, msg.length, port, host, (err, bytes) => {
	if(err) throw err;
	console.log('UDP message sent to ' + host + ':' + port);
	console.log('bytes = ' + bytes.toString());
	client.close();
});