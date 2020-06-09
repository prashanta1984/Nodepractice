const http = require('http');
const fs = require('fs');
const url = require('url');
function req(request,response){
    const base = url.parse(request.url);
    const pathname = base.pathname;
    console.log(pathname + ' received');
    fs.readFile('index1.html',function(err,data){
    response.writeHead(200,{
        'Content-Type' : 'text/html'
    });
    response.write("hello world");
    response.write(data);
    response.end();
    }
   )
}

http.createServer(req).listen(8080);
console.log('Server starter');