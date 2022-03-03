var Todos = require('../models/todoModel');



module.exports = function(app){

        app.get('/test', function(req, res) {

            // add to database
            var starterTodos = 
            [   {

                    todo: ['um', 'thingy', 'stuff'],
                    done: ['complete', 'all']
            }
            ];
            Todos.create(starterTodos, function (err, results){
                console.log(starterTodos);     
                    res.send(results);
            });

           

          

        });

    



}