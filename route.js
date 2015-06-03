module.exports = function(app){
    app.get('/', function(req, res) {
        res.sendFile('public/home.html',{root: __dirname });
    });
    app.get('/customers', function(req, res) {
        res.sendFile('public/customers/customers-home.html',{root: __dirname });
    });
    app.use(function(req, res) {
        res.sendStatus(404);
    });
};