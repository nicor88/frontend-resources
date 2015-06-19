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
    app.get('/q&a', function(req, res) {
        res.sendFile('public/q&a/q&a-home.html',{root: __dirname });
    });

    //API
    app.get('/q&a/question/:id', function(req, res) {
        var id_question=req.params.id;
        var questions=[
            {id:1,question:'Domanda di prova1',answers:[
                {id_question:2,answer:'scegli2'},
                {id_question:3,answer:'scegli3'}
            ]},
            {id:2,question:'Domanda di prova2',answers:[
                {id_question:1,answer:'scegli1'},
                {id_question:3,answer:'scegli3'}
            ]},
            {id:3,question:'Domanda di prova3',answers:[
                {id_question:1,answer:'scegli1'},
                {id_question:4,answer:'scegli4'}
            ]},
            {id:4,question:'Domanda di prova3',answers:[
                {id_question:'last',answer:'last question'},
                {id_question:3,answer:'scegli3'}
            ]}
        ];
        for (var i=0;i<questions.length;i++){
            if(questions[i].id==id_question){
                return res.json(questions[i]);
            }
        }
    });


    app.use(function(req, res) {
        res.sendStatus(404);
    });
};