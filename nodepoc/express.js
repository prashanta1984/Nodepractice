const express = require('express');
const app = express();
const port = 8080;
app.get('/',function(req,res){
    res.send('Hello World');
})
app.get('/foo',function(req,res){
    res.send('<h1>Foo Page</h1>');
})
app.listen(port,function(){
    return console.log('port '+ port);
})