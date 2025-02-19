import { API_USER, API_TASKS, API_TASK, API_CATEGORIES } from "./api";

//GET//
export async function fetchUser(id) {
    try {
      const response = await fetch(API_USER(id));
      if (!response.ok) throw new Error("Failed to fetch user");
      return await response.json();
    } catch (error) {
      console.error("Error fetching user:", error);
    }
};

export async function fetchTasks(userId) {
    try {
      const response = await fetch(API_TASKS(userId));
      if (!response.ok) throw new Error("Failed to fetch tasks");
      return await response.json();
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
};

export async function fetchTask(userId, taskId) {
    try {
      const response = await fetch(API_TASK(userId, taskId));
      if (!response.ok) throw new Error("Failed to fetch task");
      return await response.json();
    } catch (error) {
      console.error("Error fetching task:", error);
    }
};

export async function fetchCategories() {
    try {
      const response = await fetch(API_CATEGORIES());
      if (!response.ok) throw new Error("Failed to fetch categories");
      return await response.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
}

//DELETE//
export async function deleteTaskRequest(userId, taskId) {
  try {
    const response = await fetch(API_TASK(userId, taskId), {
      method: 'DELETE'
    });
    return response
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}