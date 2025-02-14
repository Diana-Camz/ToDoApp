CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    lastname VARCHAR(255),
    image_url VARCHAR (500)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status BOOLEAN DEFAULT false,
    date DATE NOT NULL,
    time TIME NOT NULL,
    priority ENUM('low', 'medium', 'high') NOT NULL,
    description TEXT,
    emoji VARCHAR(10) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    image_url VARCHAR (500)
);

CREATE TABLE task_categories (
    task_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (task_id, category_id),
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);


INSERT INTO users (name, lastname, image_url)
VALUES ("Ana", "Vargas", "/client/images/avatar9.webp");

INSERT INTO tasks (title, status, date, time, priority, description, emoji, user_id)
VALUES ("Doctor Appointment", true, "2025-01-19", "02:00:00", "high", "Annual health checkup with Dr. Smith.", "🏥", 1);

INSERT INTO categories (name, image_url) 
VALUES ("Health", "images/health.png");

INSERT INTO task_categories (task_id, category_id) 
VALUES (1, 12), (1, 8);