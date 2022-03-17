var http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var url = req.url;

    if(url === '/about'){
        res.write('Welcome to about us page');
        res.end;
    }
    else if(url === '/contact'){
        res.write('Welcome to contact us page');
        res.end;
    }
    else{
        res.write('Hello World');
        res.end;
    }
}).listen(8000);