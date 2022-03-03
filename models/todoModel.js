var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    todo: [String],
    done: [String]
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;