/******************************************************************************/
/*
 * All data coming in and going out will be converted to/from JSON.
 *
 * Promises should be resolved with response data from the server,
 * decoded from JSON.
 *
 * Hints:
 *
 * Set content type before sending a request:
 *
 *   req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 *
 * Send a data object as JSON:
 *
 *    req.send(JSON.stringify(data));
 *
 * Parse an incoming JSON string:
 *
 *   var data = JSON.parse(req.responseText || "null");
 *
 * Only resolve the promise if the (load) `status' code is >= 200 and
 * < 300.  Otherwise reject the promise.  Also reject the promise on
 * XHR failure (error).
 *
 */
Ajax = (function(){

  /**
   * raw
   * abstraction for the actual XHR request
   *
   * @return Promise
   */
  var raw = function(url, method, data) {
    // Return a promise.
  };

  /**
   * get
   * makes HTTP GET request to a given URL
   *
   * @return Promise
   */
  var get = function(url) {
  };

  /**
   * post
   * makes HTTP POST request to a given URL to create a resource
   *
   * @return Promise
   */
  var post = function(url, data) {
  };

  /**
   * patch
   * makes HTTP PATCH request to a given URL to update existing resource
   *
   * @return Promise
   */
  var patch = function(url, data) {
  };

  /**
   * destroy
   * makes HTTP DELETE request to a given URL to delete existing resource
   *
   * @return Promise
   */
  var destroy = function(url) {
  };

  // Our public interface
  return {
    get:     get,
    post:    post,
    patch:   patch,
    destroy: destroy,
  };
})();
