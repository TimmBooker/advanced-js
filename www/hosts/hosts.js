/*
 * Hosts Exercise:
 *
 * Using an IIFE, change the `Hosts' variable below so that it becomes
 * an object.  The object should have four (4) properties that are all
 * functions:
 *
 *   add(name, address) - A function that takes two arguments, a host
 *                        name and an IP address.  The function should
 *                        record that the given host has the specified
 *                        IP address. Take note a host may have multiple ips.
 *
 *  lookupByName(name)  - A function that returns all IP addresses
 *                        associated with the given host name.  If the
 *                        given name has not been recorded by a call
 *                        to `add' then this function should return an
 *                        empty array.
 *
 *  lookupByIP(address) - A function that returns all host names that
 *                        were recorded with the specified IP address.
 *                        If the specified IP address does not have
 *                        any host names associated with it then this
 *                        function should return an empty array.
 *
 *  clear()             - A function that removes all host names and
 *                        IP addresses from the Hosts object.
 *
 * Notes:
 *
 *  - Do not introduce any new global variables.  The `Hosts` variable
 *    is the only allowed global variable.
 *
 *  - Run the tests using the following command:
 *
 *        node bin/jasmine spec/hosts.spec.js
 *
 *  - Look at the spec file for clarification of the requirements
 *    listed above.  The spec file is: spec/hosts.spec.js
 *
 *
 * Bonus Exercise:
 *
 * When your tests are passing, try adding the following
 * functionality:
 *
 * Using the `Object.defineProperty' function, add a new property to
 * the API called `length'.  The `length' property should be dynamic
 * and should equal the total number of host names stored in the
 * `Hosts' object.  This property SHOULD NOT be a function, and it
 * must be enumerable.  (Hint: look at the `get' property descriptor.)
 *
 * Make sure your tests still pass.
 */
Hosts = (function(){

	// privately scoped :D
	var hosts = {};

	var api = {
		add: function(hostName, ip) {
			ips = hosts[hostName] || [];

			if (ips.indexOf(ip) < 0) {
				ips.push(ip);
			}

			hosts[hostName] = ips;
		},
		lookupByName: function(hostName) {
			return hosts[hostName] || [];
		},
		lookupByIP: function(ip) {
			var matchingHosts = [];

			for (var hostName in hosts) {
				if (hosts[hostName].indexOf(ip) >= 0) {
					matchingHosts.push(hostName);
					continue; // don't need to keep searching
				}
			}

			return  matchingHosts;
		},
		clear: function() {
			hosts = {};
		}
	};

	Object.defineProperty(api, 'length', {
	  get: function() { return Object.keys(hosts).length; },
	  enumerable: true,
	  configurable: false
	});

	return api;

})();
