var p_func = require('./calc/p');
var a_func = require('./calc/a');
var v_func = require('./calc/v');

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer( (req, res) =>
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    var myUrl = req.url;
    // break it into components 
    var arr = myUrl.split('/');
    var arrValOne = arr[0]; // nothing
    var arrValTwo = arr[1]; // p, v, or a
    var arrValThree = arr[2]; // val
    
    var output = 'OOPS';

    if (arrValTwo === 'p' )
    {
        if ( !isNaN(arrValThree) )
        {
            output = p_func.p(arrValThree);
        }    
    }
    else if (arrValTwo === 'a')
    {
        if ( !isNaN(arrValThree) )
        {
            output = a_func.a(arrValThree);
        }
    }
    else if (arrValTwo === 'v')
    {
        if ( !isNaN(arrValThree) )
        {
            output = v_func.v(arrValThree);
        }
    } 

    res.end(output);
});

server.listen(port, hostname, () =>
{
    console.log('Server is started on port ' + port)
});