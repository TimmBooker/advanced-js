/**
 * Write a function
 *   callLater(fn, ms);
 * that expects two arguments, a function and time in milliseconds
 *
 * The function will set up the passed fn to be invoked after ms milliseconds
 * It should return a promise that is fulfilled once fn function runs
 * It should reject if the ms delay is 0 or less.   
 * (tip: uses promises and setTimeout)
 *
 * Bonus:
 * Write another function:
 *   callLaterWaterfall(fns, ms);
 * The function expects two arguments, an array of functions and time in ms
 * Upon invokation it will run each function in sequence, with
 * ms milliseconds delay between calls
 * (tip: uses promises, async and await)
 */

function callLater(fn, ms) {

	//return a promise
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			fn();
			resolve();
		}, ms);
	});

}

// test me here...
// callLater();
var prom = callLater(function() {
	console.log('Hi');
}, 1000);

prom.then(function() {
	console.log('Hi 2');
})
