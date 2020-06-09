const express = require('express');
const app = express();
const port =process.env.port || 8080;
//app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index1.html');
})
app.get('/2', function (req, res) {
    res.sendFile(__dirname + '/index2.html');
})
app.listen(port, function () {
    return console.log(`port is  ${port}`);
})
