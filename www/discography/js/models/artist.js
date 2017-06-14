/******************************************************************************/
// Artist constructor.  Given an object describing an artist, copy all
// of its local properties into `this'.
Artist = function(fields) {
  this.id = fields.id;
  this.name = fields.name;
  this.formation_year = fields.format_year;
  this.website = fields.website;
};

/******************************************************************************/
// Should fetch a single artist via Ajax.  Return a promise that
// resolves to an instance of the Artist function.
Artist.fetchOne = function(id) {
  return Ajax.get('/api/artists/1')
    .then(function(data) {
      return new Artist(data);
    });
};

/******************************************************************************/
// Should fetch all artists via Ajax.  Return a promise that
// resolves to an array of Artist objects.
Artist.fetchAll = function() {
  return new Promise(function(fulfill, reject) {
    var getArtistPromise = Ajax.get('/api/artists');

    getArtistPromise.then(function(data) {
      var artists = [];

      data.forEach(function(val) {
        artists.push(new Artist(val));
      });

      fulfill(artists);
    });
  });
};

/******************************************************************************/
Artist.prototype = {
  // Create a new remote record if the `id' property is `undefined',
  // otherwise update an existing remote record.
  //
  // Return a promise from the Ajax library.  Don't forget to update
  // the `this' object with properties returned by the server
  // (i.e. the newly generated remote ID when creating a record).
  save: function() {

    var that = this;

    if (that.id) {
      return Ajax.patch('/api/artists/' + that.id, that)
        .then(function(response) {
          return that;
        });
    } else {
      return Ajax.post('/api/artists', that)
        .then(function(response) {
          //Artist.call(this, response);
          that.id = response.id;
          return that;
        });
    }

  },

  // Optional: Write a `destroy' method that deletes the artist from
  // the remote server.  Return a promise.
  destroy: function() {
    var self = this;
    return Ajax.destroy('/api/artists/' + this.id)
      .then(function(response) {
        delete self.id;
        return true;
      });
  },
};
