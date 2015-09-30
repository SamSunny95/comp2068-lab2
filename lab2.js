var http = require('http');

// require node's url module to parse the url's querystring
var url = require('url');

// create the server to run the page
http.createServer(function (req, res) {

    // get the querystring and parse the subtotal as a float value
    var qs = url.parse(req.url, true).query;
    var Method = qs.method;
    var X = parseFloat(qs.x);
    var Y = parseFloat(qs.y);

        
    if(Method==="add")
    {
     	res.write('<h1>Calculator (Lab 2)</h1>' + X + ' + ' + Y + ' = ' + (X+Y));
    	res.end();
    }
	else if(Method === "subtract")
	{
		res.write('<h1>Calculator (Lab 2)</h1>' + X + ' - ' + Y + ' = ' + (X-Y));
    	res.end();
	}
	else if(Method==="multiply")
	{
		res.write('<h1>Calculator (Lab 2)</h1>' + X + ' * ' + Y + ' = ' + (X*Y));
    	res.end();
	}
	else if(Method==="divide")
	{
		res.write('<h1>Calculator (Lab 2)</h1>' + X + ' / ' + Y + ' = ' + (X/Y));
    	res.end();
	}
   
}).listen(3000);

// page runs at http://localhost:3000/lab2.js?method=divide&x=16&y=4