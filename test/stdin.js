//Import nutty
var nutty = require('nutty');
var nutty_body = require('../index.js');

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
