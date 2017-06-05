require("../www/discography/js/lib/model.js");
require("../www/discography/js/models/artist.js");
require("../www/discography/js/lib/ajax.js");
require("../www/discography/js/lib/promise.js");

/******************************************************************************/
//
// Jasmine Docs: https://jasmine.github.io/2.4/introduction.html
//
/******************************************************************************/

describe("Artist model interface", function() {

  it("fetchOne should provide one artist", function(done) {
    // Some test data:
    var record = {name: "The Wombats"};

    // Pretend the server responded with the above object:
    ajaxSpy('get', record);

    // Call into the Artist model:
    Artist.fetchOne(1).then(function(artist) {
      expect(artist.name).toEqual(record.name);
      expect(artist.save).toBeDefined();
      done(); // Make sure to call `done' last.
    }).catch(function() {
      done.fail("shouldn't have failed");
    });
  });

  it("fetchAll should provide list of artists", function(done) {
    // Some test data:
    var records = [{name: "The Wombats"}, {name: "Bla"}];

    // Pretend the server responded with the above object:
    ajaxSpy('get', records);

    // Call into the Artist model:
    Artist.fetchAll().then(function(artists) {
      expect(artists).toEqual(jasmine.any(Array));

      expect(artists[0].name).toEqual(records[0].name);
      expect(artists[0].save).toBeDefined();
      done(); // Make sure to call `done' last.
    }).catch(function() {
      done.fail("shouldn't have failed");
    });
  });

  describe("save", function(done) {

    it("should patch when editing", function(done) {});

    it("should post when creating a new record", function(done) {});

    it("should update artist object after saving", function(done) {});

  });

  describe("destroy", function(done) {

    it("should delete the record from the server", function(done) {});

  });

});
