function callLater(fn, ms) {

	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			fn();
			resolve(1);
		}, ms);
	});

}

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


var prom = callLaterWaterfall([function() {
	console.log('hi');
}, function(){console.log('poo')}, function(){console.log('three')}], 1000).then(function(data) {
	console.log(data);
});

