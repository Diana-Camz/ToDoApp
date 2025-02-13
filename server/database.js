import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

export async function getTaskByID(id){
    const [row] = await pool.query(
        `SELECT * FROM tasks WHERE id = ?;`, 
        [id]
    );
    return row[0];
};

export async function getTasksByUserID(id){
    const [row] = await pool.query(
        `SELECT * FROM tasks WHERE user_id = ?;`, 
        [id]
    );
    console.log(row)
    return row;
};

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

export async function getTasksWithCategories(){
    const [rows] = await pool.query(
        `SELECT t.id AS task_id, t.title, t.status, t.date, t.time, t.priority, t.description, t.emoji, t.user_id,
        GROUP_CONCAT(c.name ORDER BY c.name SEPARATOR ' | ') AS categories
        FROM tasks t
        LEFT JOIN task_categories tc ON t.id = tc.task_id
        LEFT JOIN categories c ON tc.category_id = c.id
        GROUP BY t.id;`
    );
    console.log(rows);
};

//CREATE
//UPDATE
export async function toggleStatus(id, value){
    const newValue = value === true ? "TRUE" : "FALSE";
    const [result] = await pool.query(
        `UPDATE tasks SET status = ${newValue} WHERE id = ?`
        [id]
    );
    return result;
}
//DELETE
export async function deleteTask(id){
    const [result] = await pool.query(
        `DELETE * FROM tasks WHERE id = ?`
        [id]
    );
    return result;
}
