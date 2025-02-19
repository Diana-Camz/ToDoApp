import { useState, useEffect, useCallback} from "react"
import { fetchTasks } from "../api/requests";


export const useTasks = (userId) => {
    const [loadingTasks, setLoadingTasks] = useState(false);
    const [tasks, setTasks] = useState([]);

    const getTasksData = useCallback(async () => {
        setLoadingTasks(true)
        try {
            const data = await fetchTasks(userId)
            setTasks(data)
        } catch (error) {
            console.error('Error fetching tasks data', error)
        } finally {
            setLoadingTasks(false)
        }
    }, [userId]);

    useEffect(() => {
        getTasksData();
    }, [getTasksData]);

    return {tasks, loadingTasks, setLoadingTasks, getTasksData}
}