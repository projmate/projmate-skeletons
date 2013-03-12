var H = require('./helper');
var {{pm__filterCtor}} = H.{{pm__filterCtor}};
var assert = H.assert;

describe('{{pm__filter}}', function() {
  it('should add a header', function(done) {
    var filter = new {{pm__filterCtor}};
    var asset = H.mockAsset({text: 'bar'});
    filter.process(asset, {header: 'foo'}, function(err, result) {
      assert.equal(result, 'foobar');
      done();
    });
  });
});
