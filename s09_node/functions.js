/**
 * http://usejsdoc.org/
 */
function add0(x,y) {
	var r=x+y
	return r
}

var rv=add0(2,8)
console.log('rv= ' + rv)



function add1(x,y,callback) {
	var r=x +y
	callback(r)
	console.log('add1 finished')
}

function fcalled(num) {
// functie non animata ce va fi apelata de call back 
	console.log('call-backed from add1,num=' + num)
}

add1(3,8,fcalled)


function add2(x,y,callback) {
	var r=x +y
	callback(r)
	console.log('add2 finished')
}

add2(3,23,function(num) {
	// functie anonima ce va fi apelata de call-back din add2
	console.log('call-backed from add2,num = ' + num)
})


function add3(x,y,callback) {
	var r=x +y
	callback(r)
	console.log('add3 finished')
}

add3(50,15,(num)=> { 
	//this is anonymous function called clojure as lambda expression called back from add3
	// from add3
	console.log('called-back from add3, num =' + num)
});

