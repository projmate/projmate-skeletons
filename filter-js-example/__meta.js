/**
 * This runs in sandbox so keep it simple. Remember all these properties
 * are prefixed with 'pm__' in templates.
 *
 * This file is deleted in the rendered project.
 */

var meta = {
  //// User inputs

  filter: "filter name",
  author: "your full name",
  email: "your e-mail",
  description: "filter description",

  ////  Use functions for derivatives of user inputs.

  // The NPM project name.
  project: function() {
    return "projmate-filter-" + this.filter.toLowerCase();
  },

  // The filter's class or constructor function name.
  filterCtor: function() {
    return this.filter[0].toUpperCase() + this.filter.slice(1);
  },

  // The copyright year.
  year: function() {
    return (new Date).getFullYear();
  }
};
