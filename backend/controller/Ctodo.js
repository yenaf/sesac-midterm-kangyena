const { Todo } = require('../models/index');

exports.getTodo = async (req,res)=>{
   try{
    const addTodo = await Todo.create({
      "title": "점심 맛있게 먹기",
      "done": true
    });
    res.json(addTodo);
   }catch{
    console.error(err);
    res.status(500).send('interrnal server Error');
   }
}