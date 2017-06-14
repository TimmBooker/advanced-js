View = (function() {

  // Fetch a template based on its ID from the HTML page.
  // Return the text content of the template without rendering it.
  var get = function(templateID) {
      var templateEl = document.getElementById(templateID);
      return templateEl && templateEl.innerHTML;
  };

  // Render a single object using the given template.
  // Mustache API Docs: https://github.com/janl/mustache.js
  var render = function(template, object) {
    return Mustache.render(
      template,
      object
    );
  };

  // Given a template ID and an object, fetch the template, render it,
  // and insert its text into the HTML page.  Place the rendered
  // template text into the `<div id="view"></div>' section of
  // index.html.
  var set = function(templateID, object) {
    document.getElementById('view').innerHTML = render(
      get(templateID),
      object
    );
  };

  return {
    get:    get,
    render: render,
    set:    set,
  };
})();
