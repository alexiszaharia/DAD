/**
 * http://usejsdoc.org/
 */
var buf = new Buffer(26);

for(var i = 0; i < 26; i++)
	buf[i] = i + 97;

console.log(buf.toString());
console.log(buf.toString("ascii", 0, 5));

var b1 = new Buffer("node recap");
var b2 = new Buffer("...  it is simple");
var b3 = Buffer.concat([b1, b2]);
console.log("b3="+ b3.toString());

var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD');
var res = buf1.compare(buf2);

if (res < 0) {
	console.log("buf1 is less than buf2");
} else if(res > 0) {
	console.log("buf1 is greater than buf2");
}

var bufR = new Buffer("IE master program");
var bufRes = bufR.slice(0, 8);
console.log("bufRes = " + bufRes.toString());

var bu1 = new Buffer("Test");
var bu2 = new Buffer("Test");
var s1 = "Test1";
var s2 = "Test1";

if(bu1 == bu2) {
	console.log("bu1 == bu2");
}
if(bu1 === bu2) {
	console.log("bu1 === bu2");
}

if(s1 == s2) {
	console.log("s1 == s2");
}
if(s1 === s2) {
	console.log("s1 === s2");
}