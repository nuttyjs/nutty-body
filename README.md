# nutty-body

[![npm](https://img.shields.io/npm/v/nutty-body.svg?style=flat-square)](https://www.npmjs.com/package/nutty-body)
[![npm](https://img.shields.io/npm/dt/nutty-body.svg?style=flat-square)](https://www.npmjs.com/package/nutty-body)
[![npm](https://img.shields.io/npm/l/nutty-body.svg?style=flat-square)](https://github.com/nuttyjs/nutty-body)

> Capture text piped from stdin

## Install

Install the package using NPM:

```
npm install --save nutty-body
```

## Example

```javascript
//Import nutty
var nutty = require('nutty');
var nutty_body = require('nutty-body');

//Set the CLI name
nutty.set('name', 'stdin');

//Set the CLI description
nutty.set('description', 'My test app');

//Set the CLI version
nutty.set('version', '1.0.0');

//Parse the body
nutty.use(nutty_body({ limit: 1024 }));

//Use a middleware
nutty.use(function(args, next)
{
  //Display in console
  console.log('Data from stdin: ');
  console.log(args.body);
});

//Run the CLI
nutty.run();
```

## API

```javascript
var nutty_body = require('nutty-body');
```

### nutty_body(opt)

Returns a middleware to be used with `nutty.use` (see the [nutty.use](https://github.com/nuttyjs/nutty#nuttyusefn) documentation). The options argument must be an object with the following settings:

- `limit`: a `number` with the maximum data size that can be piped from `stdin`. Default is `1024`.

## License

[MIT](./LICENSE) LICENSE.
