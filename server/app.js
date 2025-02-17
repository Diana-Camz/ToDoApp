import express from "express";
import cors from 'cors';
import { 
    getTaskByID,
    getTasksByUserID,
    getUserByID,
    getTasksWithCategories,
    getAllCategories,
    toggleStatus,
    deleteTask,
    createTask,
    createTaskCategory,
    updateTask,
 } from "./database.js";

 const corsOptions = {
   origin: 'http://127.0.0.1:5173',
   methods: ['POST', 'GET', 'DELETE'],
   credentials: true,
}

 const app = express();
 app.use(express.json());
app.use(cors(corsOptions));


 //GET//
 app.get('/user/:id', async(req, res)=>{
    try {
      const user = await getUserByID(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching user in /user/id in app.js' });
    }
 });

 app.get('/task/:id', async(req, res)=>{
    try {
      const task = await getTaskByID(req.params.id);
      res.status(200).send(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching task in /task/id in app.js' });
    }
 });

 app.get('/users/:userId/tasks', async(req, res)=> {
   try {
      const userId = req.params.userId;
      const tasks = await getTasksWithCategories(userId);
      res.json(tasks)
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching tasks with categories in /users/id/tasks" });
   }
 });

 app.get('/categories', async(req, res)=> {
    try {
      const categories = await getAllCategories();
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching categories in /categories" });
    }
 });


 //CREATE//
 app.post('/tasks', async (req, res) => {
   try {
       const {title, status, date, time, priority, description, emoji, user_id, categories} = req.body;
       const task = await createTask(title, status, date, time, priority, description, emoji, user_id);
       if(categories && categories.length > 0){
         for(const category_id of categories){
            await createTaskCategory(task.id, category_id)
         }
       }
       res.status(201).send({status: "ok", task});
   } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({ message: 'Error creating a task in /tasks in app.js' });
   }
});

//UPDATE//
 app.put('/task/:id', async(req, res)=> {
    try {
      const taskId = req.params.id;
      const updatedTask = await updateTask(taskId, req.body);
      //const task = await toggleStatus(req.params.id, value);
      res.status(202).send({status: "ok", updatedTask});
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ message: 'Internal server error in /task/:id' });
    }
 });

//DELETE//
app.delete('/task/:id', async(req, res)=> {
    try {
      await deleteTask(req.params.id);
      res.status(202).send({message: 'Task deleted successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error when deleting a task in /task/id in app.js' });
    }
});



 app.listen(8080, ()=> {
    console.log('server running on port 8080'); 
 })