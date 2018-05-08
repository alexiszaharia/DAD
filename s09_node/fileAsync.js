/**
 * http://usejsdoc.org/
 */
//node.js API is blocking mode for reading files
// synchronous
/*
var fs=require("fs")


var data=fs.readFileSync('./test.txt')
console.log('\n data = \n' + data.toString())
console.log('prog main finished')
*/

/*
// non-blocking <=>async
var fs=require('fs')

fs.readFile("./test.txt", function(err, data) {
	if(err) return console.error(err)
	
	console.log(data.toString())
	
})

console.log('prog main finished')
*/

// non-blocking async streams based on event-emitter framework
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('./input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
	data += chunk;
	console.log("chunk = " + chunk);
});

readerStream.on('end', () => {
	console.log("\n all data = " + data);
});

readerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log('main prog finished');