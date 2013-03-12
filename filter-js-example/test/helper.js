var Chai = require('chai');
var assert = Chai.assert;
Chai.Assertion.includeStack = true;

// Get the constructor.
var classFactory = require('../lib/{{pm__filter}}');
var Projmate = require('projmate-core/dist');

// Mock an asset.
var FileAsset = Projmate.FileAsset;

module.exports = {
  assert: assert,
  Projmate: Projmate,
  {{pm__filterCtor}}: classFactory(Projmate),
  mockAsset: function(options) {
    options || (options = {});
    if (!options.text) throw new Error('Options.text argument is required');
    options.filename || (options.filename = 'notused.0');
    options.parent = [];
    return new FileAsset(options);
  }
};
