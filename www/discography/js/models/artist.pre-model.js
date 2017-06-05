/******************************************************************************/
// Artist constructor.  Given an object describing an artist, copy all
// of its local properties into `this'.
Artist = function(fields) {
  this.id = fields.id || null;
  this.name = fields.name || null;
  this.formation_year = fields.formation_year || null;
  this.website = fields.website || null;

  // could use list of allowed fields?
};

Artist.prototype = Model;

/******************************************************************************/
// Should fetch a single artist via Ajax.  Return a promise that
// resolves to an instance of the Artist function.
Artist.fetchOne = function(id) {
  var prom = Ajax.get('/api/artists/' + id);

  return prom.then(function(response){
    return new Artist(response);
  }, function(status) {
    return status;
  });
};

/******************************************************************************/
// Should fetch all artists via Ajax.  Return a promise that
// resolves to an array of Artist objects.
Artist.fetchAll = function() {

  var prom = Ajax.get('/api/artists');

  // coule use records.map()

  return prom.then(function(response){
    var arrayOfArtists = [];
    response.forEach(function(val, i) {
      arrayOfArtists.push(new Artist(val));
    });
    return arrayOfArtists;
  }, function(status) {
    return status;
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

    var self = this;

    if (this.id) {
      return Ajax.patch('/api/artists/' + this.id, this).then(function(response) {
        return self;
      })
    } else {
      return Ajax.post('/api/artists', this).then(function(response) {
        Artist.call(self, response);
        return self;
      });
    }

  },

  // Optional: Write a `destroy' method that deletes the artist from
  // the remote server.  Return a promise.
  destroy: function() {
    var self = this;
    return Ajax.destroy('/api/artists/' + this.id).then(function(response) {
      delete self.id;
      return true;
    });
  },
};
