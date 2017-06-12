/**
 * Implement the partial function to get the following code to work:
  	var obj = {

    	magnitude: 10,
    	add: function (x, y) {

			return (x + y) * this.magnitude;

		}

	}
    var add10 = obj.add.partial(obj, 1);

    add10(2); // should return 30
 */
Function.prototype.partial = function() {

  // A simple Partial
  // This gets the tests to pass, but
  // - it supports only one "hard coded" argument
  // - it creates a FULL copy of the function using bind()
  var args = Array.prototype.slice.call(arguments);
  var obj = args.shift();
  return this.bind(obj, args[0]);

  // A better Partial
  // - supports multiple arguments
  // - creates a new function but not a FULL copy of the function using bind()
  var args = Array.from(arguments);
  var context = args.shift();
  var func = this;

  return function () {
  	// arguments here is of sum10()
    var newArgs = Array.from(arguments);
    return func.apply(context, args.concat(newArgs));
  };

};
