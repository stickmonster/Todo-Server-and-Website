var Todos = require('./models/todoModel');
var bodyParser = require('body-parser');
const { get } = require('mongoose');


module.exports = function(app) {


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/', function(req, res,next) {

        // add to database
        var databaseTodos = 
        [   {

                todo: req.body.todo,
                done: req.body.done
        }
        ];

        Todos.create(databaseTodos, function (err, results){
            console.log(databaseTodos);     
 //              res.redirect('/');
        });
            });


    app.get('/', function(req, res) {

     var todos =   Todos.findOne().sort('-_id').exec({todos},
            function(err, todos){
                    if(err) throw err;
                    res.render('structure', {todos});
  
            })
     
    });

  

}
        
