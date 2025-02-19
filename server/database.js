import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();


export async function getUserByID(id){
    const [row] = await pool.query(
        `SELECT * FROM users WHERE id = ?;`, 
        [id]
    );
    return row[0];
};

export async function getAllCategories(){
    const [rows] = await pool.query(
        `SELECT * FROM categories;`,
    );
    return rows;
};

export async function getTasksWithCategories(user_id){
    const [rows] = await pool.query(
        `SELECT t.id AS task_id, t.title, t.status, t.date, t.time, t.priority, t.description, t.emoji, t.user_id,
        GROUP_CONCAT(c.name ORDER BY c.name SEPARATOR ' | ') AS categories
        FROM tasks t
        LEFT JOIN task_categories tc ON t.id = tc.task_id
        LEFT JOIN categories c ON tc.category_id = c.id 
        WHERE t.user_id = ?
        GROUP BY t.id;`,
        [user_id]
    );
    return rows;
};

export async function getTaskWithCategories(task_id, user_id) {
    const [rows] = await pool.query(
        `SELECT t.id AS task_id, t.title, t.status, t.date, t.time, t.priority, 
                t.description, t.emoji, t.user_id,
                GROUP_CONCAT(c.name ORDER BY c.name SEPARATOR ' | ') AS categories
         FROM tasks t
         LEFT JOIN task_categories tc ON t.id = tc.task_id
         LEFT JOIN categories c ON tc.category_id = c.id
         WHERE t.id = ? AND t.user_id = ?
         GROUP BY t.id;`,
        [task_id, user_id]
    );
    
    return rows.length > 0 ? rows[0] : null;
};

//CREATE
export async function createTask(title, status, date, time, priority, description, emoji, user_id) {
    const [result] = await pool.query(
        `INSERT INTO tasks (title, status, date, time, priority, description, emoji, user_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [title, status, date, time, priority, description, emoji, user_id]);
         const taskId = result.insertId;
         return {task_id: taskId};
};

export async function createTaskCategory(task_id, category_id) {
    const [result] = await pool.query(
        `INSERT INTO task_categories (task_id, category_id)
         VALUES (?, ?)`, [task_id, category_id]); 
         //return result;
}

//UPDATE
export async function updateTask(id, values) {
    const fields = Object.keys(values).filter(field => field !== 'categories');
    const updateValues = fields.map(field => `${field} = ?`).join(', ')
    
    if(fields.length === 0){
        throw new Error("No valid fields provided for update.");
    };

    const updateParams = fields.map(field => values[field]);
    updateParams.push(id);

    const [result] = await pool.query(`UPDATE tasks SET ${updateValues} WHERE id = ?`,
        updateParams
    );

    if(values.categories){
        await updateTaskCategories(id, values.categories);
    }
    return result;
};

export async function updateTaskCategories(task_id, categories){
    await pool.query(`DELETE FROM task_categories WHERE task_id = ?`,
        [task_id]
    );

    if(categories.length > 0){
        const placeholders = categories.map(() => '(?, ?)').join(', ');
        const values = categories.flatMap(category_id => [task_id, category_id])
        await pool.query(`INSERT INTO task_categories (task_id, category_id) VALUES ${placeholders}`, 
        values
    );
    }
}

export async function toggleStatus(id, value){
    const newValue = value === true ? "TRUE" : "FALSE";
    const [result] = await pool.query(
        `UPDATE tasks SET status = ${newValue} WHERE id = ?`,
        [id]
    );
    return result;
}
//DELETE
export async function deleteTask(id){
    const [result] = await pool.query(
        `DELETE FROM tasks WHERE id = ?`,
        [id]
    );
    return result;
};