import express from "express";
import cors from 'cors';
import { 
  getUserByID,
  getTasksWithCategories,
  getTaskWithCategories,
  createTask,
  getAllCategories,
  toggleStatus,
  deleteTask,
  createTaskCategory,
  updateTask,
 } from "./database.js";

 const corsOptions = {
   origin: 'http://127.0.0.1:5173',
   methods: ['POST', 'GET', 'DELETE', 'PUT'],
   credentials: true,
}

 const app = express();
 app.use(express.json());
app.use(cors(corsOptions));


 //GET//

 //user data
 app.get('/users/:id', async(req, res)=>{
    try {
      const user = await getUserByID(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      console.error("Error fetching user", error);
      res.status(500).json({ message: 'Error fetching user in /users/:id' });
    }
 });

 //one task with category/ies of user
 app.get('/users/:user_id/tasks/:task_id', async(req, res)=>{
    try {
      const { user_id, task_id } = req.params;
        const task = await getTaskWithCategories(task_id, user_id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(task);
    } catch (error) {
      console.error("Error fetching task:", error);
      res.status(500).json({ message: 'Error fetching task in /users/:user_id/tasks/:task_id' });
    }
 });

 //all tasks with category/ies of user
 app.get('/users/:user_id/tasks', async(req, res)=> {
   try {
      const userId = req.params.user_id;
      const tasks = await getTasksWithCategories(userId);
      res.json(tasks)
   } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ error: "Error fetching tasks with categories in /users/:user_id/tasks" });
   }
 });

 //all predetermined categories
 app.get('/categories', async(req, res)=> {
    try {
      const categories = await getAllCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Error fetching categories in /categories" });
    }
 });


 //CREATE//
 //create new task
 app.post('/users/:user_id/tasks', async (req, res) => {
   try {
       const {title, status, date, time, priority, description, emoji, user_id, categories} = req.body;
       const task = await createTask(title, status, date, time, priority, description, emoji, user_id)

       if(categories && categories.length > 0){
           if(task.task_id){
            await Promise.all(categories.map((category_id) => createTaskCategory(task.task_id, category_id)));
           }else{
            console.error('task_id not found')
           }
       }
       res.status(201).send(task);
   } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({ message: 'Error creating a task in /users/:user_id/tasks' });
   }
});

//UPDATE//
//update existing task
 app.put('/users/:user_id/tasks/:task_id', async(req, res)=> {
    try {
      const{ task_id }= req.params;
      const updatedTask = await updateTask(task_id, req.body);
      res.status(202).send(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ message: 'Error updating task in /users/:user_id/tasks/:task_id' });
    }
 });

//update status either is completed or not
 app.put('/users/:user_id/tasks/:task_id/status', async(req, res)=> {
  const {task_id} = req.params;
  const {value} = req.body;
  try {
    const completed = await toggleStatus(task_id, value);
    res.status(200).send(completed)
  } catch (error) {
    console.error('Error updating task status:', error);
    res.status(500).json({ message: 'Error updating task.' });
  }
 })

//DELETE//
//delete one task
app.delete('/users/:user_id/tasks/:task_id', async(req, res)=> {
    try {
      const {task_id} = req.params;
      const taskExists = await getTaskWithCategories(task_id, req.params.user_id);

      if (!taskExists) {
        return res.status(404).json({ message: "Task not found" });
      }
      await deleteTask(task_id)
      res.status(204).send({message: 'Task deleted successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting task in /users/:user_id/tasks/:task_id' });
    }
});



 app.listen(8080, "0.0.0.0", ()=> {
    console.log('server running on port 8080'); 
 })