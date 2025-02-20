import { API_USER, API_TASKS, API_TASKS_STATUS, API_TASK, API_CATEGORIES } from "./api";

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
};

//CREATE//
export async function createTaskRequest(newTask) {
  const userId = newTask.user_id;
  const taskId = newTask.task_id;
  try {
    const response = await fetch(API_TASKS(userId, taskId), {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(newTask)
    });
    return response
  } catch (error) {
    console.error("Error creating task:", error);
  }
};

// PUT - UPDATE //
export async function editTaskRequest(taskId, value) {
  try {
      const response = await fetch(API_TASK(value.user_id, taskId), {
          method: 'PUT',
          headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify(value)
      })
      return response
  } catch (error) {
      console.error('Error updating task', error)
  }
};

export async function updateToggleCompleted(userId, taskId, value) {
  try {
    const response = await fetch(API_TASKS_STATUS(userId, taskId), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({value}),
    });
    if (!response.ok) throw new Error('Failed to update task completion');
    return response.json();
  } catch (error) {
    console.error('Error updating task completion:', error);
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