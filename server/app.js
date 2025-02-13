import express from "express";
import { 
    getTaskByID,
    getTasksByUserID,
    getUserByID,
    getTasksWithCategories,
    getAllCategories,
    toggleStatus,
    deleteTask,
 } from "./database.js";

 const app = express();
 app.use(express.json());
 app.get('/tasks/:id', async (req, res)=>{
    const tasks = await getTaskByID(req.params.id);
    res.status(200).send(tasks);
 })




 app.listen(8080, ()=> {
    console.log('server running on port 8080'); 
 })