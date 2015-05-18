var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'public'));
app.use('/', express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./route')(app);
var server = app.listen(app.get('port'), function(err) {
    if(err) throw err;
    var serverStatus = 'Server listening at port: ' + server.address().port;
    console.log(serverStatus);
});