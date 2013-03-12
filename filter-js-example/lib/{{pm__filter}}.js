/**
 * Copyright (c) {{pm__year}} {{pm__author}} <{{pm__email}}>
 *
 * See the file LICENSE for copying permission.
 */

var Path = require("path");

module.exports = function(Projmate) {

  /**
   * Example of a filter.
   *
   * TODO remove extraneous comments.
   */
  function {{pm__filterCtor}}() {
    // A wildcard, accepts any extension.
    // CoffeeScript for example, sets this to ['.coffee', '.litcoffee']
    this.extnames = '*';

    // Uncomment next line if your filter changes the extension, for example
    // CoffeeScript filter has `outExtname = '.js'`.
    // this.outExtname = ".txt";

    Projmate.Filter.apply(this, arguments);
  }
  Projmate.extendsFilter({{pm__filterCtor}});


  /**
   * A simple example, which adds header and footer to every asset that
   * goes through the pipeline.
   *
   * @param {Object} asset = {
   *  {String} filename The filename.
   *  {String} extname The extension name with leading '.'.
   *  {String} dirname The directory name.
   *  {String} text The content or text of the file.
   * }
   * @param {Object} options User's options or {}.
   * @param {Object} cb The callback `function(err, result)`
   */
  {{pm__filterCtor}}.prototype.process = function(asset, options, cb) {
    // Make header required and footer optional
    if (!options.header) return cb("Options.header is required");
    var header = options.header;
    var footer = options.footer || "";

    try {
      // TODO processing here.
      var text = header + asset.text + footer;

      // Projmate handles updating the asset
      cb(null, text);
    } catch (ex) {
      cb(ex);
    }
  };

  return {{pm__filterCtor}};
};

