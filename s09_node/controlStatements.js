/**
 * http://usejsdoc.org/
 */
for(var idx=0;idx<3;idx++) {
	console.log("idx= " + idx);
}



var obj= {a:1,b:2,c:3}
for(var p in obj) {
	console.log(obj[p])
}

for (let val of [5,9,20,"Andrei"]) {
	console.log(val)
}