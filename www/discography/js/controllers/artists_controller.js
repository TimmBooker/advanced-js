ArtistsController = (function(){

  // Display all artists.
  var index = function() {
    Artist.fetchAll().then(function(response) {
      console.log(response);

      View.set('artists-template', {
        artists: response
      });

      var artistList = document.getElementById('artists-list');
      artistList.addEventListener('click', function(e) {
        e.preventDefault();
        // listening on #ul but caring about clicks on #li
        console.log(e.target.tagName);
        if (e.target.tagName === 'A') {
          var id = e.target.getAttribute('data-id');
          if (id) {
            show(id);
          }
        }

      });
    }, function(error) {
      console.log(error);
    })
  };

  // Display a single artist.
  var show = function(id) {
    Artist.fetchOne(id).then(function(response) {
      View.set('artist-template', response);
    });
  };

  // Display a form for creating a new artist.
  var form = function() {
  };

  // Taking values from a form, create a new artist.
  var create = function() {
  };

  // Public interface:
  return {
    index:  index,
    show:   show,
    form:   form,
    create: create,
  };
})();
