export const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const API_USER = (id) => `${BASE_URL}/users/${id}`;
export const API_TASKS = (userId) => `${BASE_URL}/users/${userId}/tasks`;
export const API_TASK = (userId, taskId) => `${BASE_URL}/users/${userId}/tasks/${taskId}`;
export const API_CATEGORIES = () => `${BASE_URL}/categories`;