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

    var prom = new Promise(function(fulfill, reject) {

      var req = new XMLHttpRequest();

      req.addEventListener("load", function(e) {
        if (req.status >= 200 && req.status < 300) {
          fulfill(JSON.parse(req.responseText));
        }
        reject(req.status);
      });

      req.addEventListener("error", function() {
        reject("Something went wrong with the request");
      });

      req.open(method, url);
      req.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );

      req.send(JSON.stringify(data));
    });

    return prom;

  };

  /**
   * get
   * makes HTTP GET request to a given URL
   *
   * @return Promise
   */
  var get = function(url) {
    return raw(url, 'GET');
  };

  /**
   * post
   * makes HTTP POST request to a given URL to create a resource
   *
   * @return Promise
   */
  var post = function(url, data) {
    return raw(url, 'POST', data);
  };

  /**
   * patch
   * makes HTTP PATCH request to a given URL to update existing resource
   *
   * @return Promise
   */
  var patch = function(url, data) {
    return raw(url, 'PATCH', data);
  };

  /**
   * destroy
   * makes HTTP DELETE request to a given URL to delete existing resource
   *
   * @return Promise
   */
  var destroy = function(url) {
    return raw(url, 'DELETE');
  };

  // Our public interface
  return {
    get:     get,
    post:    post,
    patch:   patch,
    destroy: destroy,
  };
})();
