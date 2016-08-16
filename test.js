//Import Evn
var Evn = require('./index.js');

function Test(id)
{
	this.id = id;
	this.call = function(arg)
	{
		console.log('ID: "' + this.id + '"');
		console.log('Arg: "' + arg + '"');
	};
}

var t1 = new Test('Test 1');

//First call
console.log('Normal call');
t1.call('Hey');

//ADd the new event
Evn.add('test', t1.call, t1);

//Second call
console.log('Event call');
Evn.send('test', 'Hello!!');

//Remove the event
Evn.remove('test', t1.call, t1);

//Last call
console.log('No event call');
Evn.send('test', 'Hello!!');
