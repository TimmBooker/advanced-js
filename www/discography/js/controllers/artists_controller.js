ArtistsController = (function(){

  var artistListTemplate = 'artist-list-template',
    artistViewTemplate = 'artist-view-template';

  // Display all artists.
  var index = function() {
    Artist.fetchAll().then(function(artists) {
      View.set(artistListTemplate, {
        artists: artists
      });

      var ul = document.getElementsByTagName('ul');
      ul[0].addEventListener('click', function(e) {
        // e.target...
        console.log(e.target);
        // if (e.target.node == 'LI') {
        //   var id = e.target.getAttribute('data-id');
        //   console.log(id);
        //   show(id);
        // }
      });
    });
  };

  // Display a single artist.
  var show = function(id) {
    Artist.fetchOne(id).then(function(artist) {
      View.set(artistViewTemplate, artist);
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
