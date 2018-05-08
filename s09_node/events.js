/**
 * http://usejsdoc.org/
 */
/*
var events=require("events")

var eventEmitter=new events.EventEmitter()

var connectHandler = function connected() {
	console.log('sucess conn!')
}

eventEmitter.on('connection',connectHandler)

eventEmitter.emit('connection')

console.log('prog finished')
*/

var events=require("events")

var eventEmitter=new events.EventEmitter()

var connectHandler=function connected() {
	console.log('sucess con')
	
	eventEmitter.emit('data_received')
}

eventEmitter.on('connection',connectHandler)

eventEmitter.on('data_received',function() {
	console.log('data received with success!')
})

//after 200ms
eventEmitter.emit('connection')

console.log('prog finished')