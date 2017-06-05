/**
 * Implement the partial function to get the following code to work:
  	var obj = {

    	magnitude: 10,
    	add: function (x, y) {

			return (x + y) + this.magnitude;

		}

	}
    var add10 = obj.add.partial(obj, 1);

    add10(2); // should return 30
 */
Function.prototype.partial = function() {

  // get obj
  var args = Array.prototype.slice.call(arguments);
  var obj = args.shift();
  // get other arguments

  return this.bind(obj, args[0]);
  // create a new function from this function with bound context

};
