module.exports = function(app){
    app.get('/', function(req, res) {
        res.sendFile('public/home.html',{root: __dirname });
    });
    app.get('/angular', function(req, res) {
        res.sendFile('public/angular.html',{root: __dirname });
    });
    //TODO insert sample REST API

    app.use(function(req, res) {
        res.sendStatus(404);
    });
};