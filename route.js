module.exports = function(app){
    app.get('/', function(req, res) {
        res.sendFile('public/home.html',{root: __dirname });
    });
    app.get('/customers', function(req, res) {
        res.sendFile('public/customers/customers-home.html',{root: __dirname });
    });
    app.get('/clock', function(req, res) {
        res.sendFile('public/clock.html',{root: __dirname });
    });
    app.get('/iteration', function(req, res) {
        res.sendFile('public/iteration.html',{root: __dirname });
    });
    app.use(function(req, res) {
        res.sendStatus(404);
    });
};