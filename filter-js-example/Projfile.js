exports.project = function(pm) {
  // use '{{pm__project}}' outside of this project
  var f = pm.filters('.');
  var $ = pm.shell();

  pm.registerTasks({
    self: {
      _files: {
        include: [
          'lib/{{pm__filter}}.js'
        ]
      },
      development: [
        f.{{pm__filter}}({header: '/**Custom Header*/', footer: '/**Custom footer*/'}),
        f.writeFile({_filename: {ensureLeft: 'build/'}})
      ]
    },

    test: {
      _desc: 'Runs tests',
      development: function(cb) {
        $.run('mocha test', cb);
      }
    }

  });
};
