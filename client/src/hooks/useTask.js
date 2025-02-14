import { useEffect, useState } from "react"
import exampleTask from "../data/exampleTask";


export const useTask = (id) => {
    const [loadingTask, setLoadingTask] = useState(true);
    const [task, setTask] = useState(null);


    const getTaskData = () => {
        try {
            const data = exampleTask.find(task => task.id === String(id));
            if (data){
                setTask(data)
            }else {
                console.error(`Task with id: ${id} not found`)
            }
        } catch (error) {
            console.error('Error fetching task data')
        } finally {
            setLoadingTask(false)
        }
    }

    useEffect(() => {
        getTaskData();
    }, [id]);

    return {task, loadingTask}
}