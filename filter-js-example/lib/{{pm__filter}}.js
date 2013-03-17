/**
 * Copyright (c) {{pm__year}} {{pm__author}} <{{pm__email}}>
 *
 * See the file LICENSE for copying permission.
 */

var Path = require("path");

module.exports = function(Projmate) {

  /**
   * Example of a filter.
   */
  function {{pm__filterCtor}}() {
    // Filters process assets if they match extensions. This can either be
    // single value string or an array. An asterisk, '*', means process
    // any asset.
    //
    // As an example, the coffee filter, sets this to ['.coffee', '.litcoffee']
    this.extnames = '*';

    // Uncomment next line if a filter should change the extension. For example,
    // the coffee filter sets `outExtname = '.js'`.
    //
    // this.outExtname = ".txt";
    Projmate.Filter.apply(this, arguments);

    // Preset sane options for users based on the run environment.
    //
    // As an example, the less filter, dumps line numbers while in
    // development mode.
    //      this.defaults = { development: { dumpLineNumbers: 'comments' }};
    this.defaults = {
      development: {},
      test: {},
      production: {}
    };
  }
  Projmate.extendsFilter({{pm__filterCtor}});


  /**
   * A simple example, which adds header and footer to every asset that
   * goes through the pipeline.
   *
   * @param {Object} asset = {
   *  {String} text The content or text of the file.
   *  {String} filename The filename.
   *  {String} extname The extension name with leading '.'.
   *  {String} dirname The directory name.
   *  {Object} parent The parent collection.
   * }
   * @param {Object} options User's options or {}.
   * @param {Object} cb The callback `function(err, result)`
   *
   * To add another asset
   *
   *    asset.parent.create({filename: 'path', text: 'content'});
   *
   * To clear all assets
   *
   *    asset.parent.clear()
   */
  {{pm__filterCtor}}.prototype.process = function(asset, options, cb) {
    // Example of required and optional options.
    if (!options.header) return cb("Options.header is required");
    var header = options.header;
    var footer = options.footer || "";

    try {
      // TODO processing here.
      var text = header + asset.text + footer;

      // Projmate updates the asset if text is not empty. asset.text
      // and asset.extname could be updated manually here.
      cb(null, text);
    } catch (ex) {
      cb(ex);
    }
  };

  return {{pm__filterCtor}};
};

