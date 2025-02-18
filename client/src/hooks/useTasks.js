import { useEffect, useState } from "react"
import { fetchTasks } from "../api/requests";


export const useTasks = (userId) => {
    const [loadingTasks, setLoadingTasks] = useState(true);
    const [tasks, setTasks] = useState(null);

    const getTasksData = async () => {
        try {
            const data = await fetchTasks(userId)
            if (data.length > 0){
                setTasks(data)
            }else {
                console.error(`Tasks with userId: ${userId} not found`)
            }
        } catch (error) {
            console.error('Error fetching tasks data', error)
        } finally {
            setLoadingTasks(false)
        }
    }

    useEffect(() => {
        if (userId) {
            getTasksData();
        }
    }, [userId]);

    return {tasks, loadingTasks}
}