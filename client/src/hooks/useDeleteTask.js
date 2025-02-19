import { useState } from "react";
import { deleteTaskRequest } from "../api/requests";

export const useDeleteTask = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [error, setError] = useState(null);

    const deleteTask = async (userId, taskId) => {
        setLoadingDelete(true);
        setError(null);

        try {
            const response = await deleteTaskRequest(userId, taskId);
            if (response.ok) {
                return true;
            } else {
                throw new Error(`Failed to delete task. Status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            setError(error.message);
            return false;
        } finally {
            setLoadingDelete(false);
        }
    };

    return { deleteTask, loadingDelete, error };
}