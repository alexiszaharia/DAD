/**
 * http://usejsdoc.org/
 */

var port = 33333;
var host = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', () => {
	var address = server.address();
	console.log('UDP Server bind: ' + address.address + address.port);
});

server.on('message', (msg, remote) => {
	console.log(remote.address + ":" + remote.port + ' - msg = ' + msg);
});

//server.bind(host, port);
server.bind(port);