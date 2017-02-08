//Parse the text from stdin
module.exports = function(opt)
{
  //Check the options
  if(typeof opt !== 'object'){ var opt = {}; }

  //Check the limit option
  if(typeof opt.limit !== 'number'){ opt.limit = 5 * 1024 * 1024; }

  //Return the middleware
  return function(args, next)
  {
    //Total size
    var total = 0;

    //Add the body object to args
    args.body = '';

    //Check if is being run inside a text terminal ("TTY") context
    //https://nodejs.org/api/tty.html
    if(process.stdin.isTTY){ return next(); }

    //Resume the event
    process.stdin.resume();

    //Set the default encoding
    process.stdin.setEncoding('utf8');

    //New data from stdin
    process.stdin.on('data', function(data)
    {
      //Add the size
      total = total + data.length;

      //Check the size
      if(total > opt.limit){ return next(new Error('Entity too large')); }

      //Add the data
      args.body = args.body + data;
    });

    //End event
    process.stdin.on('end', function(){ return next(); });
  };
};
