import { useEffect, useState } from "react"
import exampleTask from "../data/exampleTask";


export const useTasks = (id) => {
    const [loadingTasks, setLoadingTasks] = useState(true);
    const [tasks, setTasks] = useState(null);


    const getTasksData = () => {
        try {
            const data = exampleTask.filter(task => task.userId === Number(id));
            if (data.length > 0){
                setTasks(data)
            }else {
                console.error(`Tasks with userId: ${id} not found`)
            }
        } catch (error) {
            console.error('Error fetching tasks data')
        } finally {
            setLoadingTasks(false)
        }
    }

    useEffect(() => {
        getTasksData();
    }, [id]);

    return {tasks, loadingTasks}
}