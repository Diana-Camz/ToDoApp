import { useEffect, useState } from "react"
import { fetchTask } from "../api/requests";


export const useTask =(userId, taskId) => {
    const [loadingTask, setLoadingTask] = useState(true);
    const [task, setTask] = useState(null);


    const getTaskData =  async () => {
        try {
            const data = await fetchTask(userId, taskId);
            if (data){
                setTask(data)
            }else {
                console.error(`Task with id: ${taskId} not found`)
            }
        } catch (error) {
            console.error('Error fetching task data')
        } finally {
            setLoadingTask(false)
        }
    }

    useEffect(() => {
        if (taskId) {
            getTaskData();
        }
    }, [taskId]);

    return {task, loadingTask}
}