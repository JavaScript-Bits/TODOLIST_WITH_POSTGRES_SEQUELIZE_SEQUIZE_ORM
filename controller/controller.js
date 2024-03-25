const Todo = require("../scheema/todo")
const pool = require("../db")
const queries = require("../queries")
const getAllTodos = (req, res)=>{
    pool.query(queries.getAllTodosQuerry, (error, results)=>{
        if(error) throw error
        res.status(200).send(results.rows)
    }) 

}

const getCreateTodosSequilze = (req, res)=>{
    Todo.create({
        title: 'Sample 2  Todo',
        description: 'This is a sample  2 todo description.',
        status:"pending",
        date: new Date(),
      })
        .then(todo => {
            res.send(todo)
          console.log('Todo created:', todo.toJSON());
        })
        .catch(error => {
          console.error('Error creating todo:', error);
        });
}

const getAllTodosSequilze = (req, res)=>{
    Todo.findAll()
    .then(todos => {
        res.send(todos)
      console.log('All todos:', todos.map(todo => todo.toJSON()));
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    }); 
}


module.exports = {
    getAllTodos,
    getCreateTodosSequilze,
    getAllTodosSequilze
}