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

  // Your code here.

};
