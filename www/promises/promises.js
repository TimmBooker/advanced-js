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

	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			fn();
			resolve(1);
		}, ms);
	});

}

// test me here...
var prom = callLaterWaterfall([function() {
	console.log('hi');
}, function(){console.log('poo')}, function(){console.log('three')}], 1000).then(function(data) {
	console.log(data);
});

// bonus:
async function callLaterWaterfall(fns, ms) {

	var promHolder;

	for (let i=0; i<fns.length; i++) {
		promHolder = await new Promise(function(resolve, reject) {
			setTimeout(function() {
				fns[i]();
				resolve(1);
			}, ms);
		});
	};

	return promHolder;

}

