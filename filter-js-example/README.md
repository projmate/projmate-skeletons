# {{pm__project}}

{{pm__description}}

See [Projmate](http://projmate.com), an intuitive project toolkit for hackers.

## Installation

To install

    npm install {{pm__project}} --save-dev

## Usage

To use within a `Projfile`

1.  Register the filter as an argument to `filters('{{pm__project}}')`
2.  Use it in any task with these options.

    Options available

    Name    | Description
    ________|____________
    header  | The header.
    footer  | The footer. (optional)

Example

```javascript
    exports.project = function(pm) {
      var f = pm.filters('{{pm__project}}');

      pm.registerTasks({
        yourTask: {
          development: [
            f.{{pm__filter}}({header: '/** Custom Header */'})
            f.writeFiles
          ]
        };
      });
    };
```

## License

Copyright (c) {{pm__year}} {{pm__author}} <{{pm__email}}>

See the file LICENSE for copying permission.


