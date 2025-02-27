# TodoApp
## Project Overview
This project is a **Task Management Application** that allows users to **create, view, edit, and delete tasks** efficiently. Users can assign categories, set deadlines using date and time pickers, select task priorities, and personalize tasks with emojis.

The project is divided into two main parts:  
- **Client**: Built with **React Native** (using Expo) for a mobile user interface.  
- **Server**: Developed with **Node.js and Express** for backend operations, using **MySQL** for data storage.  


## Authors
- [@Diana-Camz](https://www.github.com/octokatherine)

## Usage Instructions
- **Create Tasks**: Add task details, set a date/time, priority, and select an emoji.
- **Edit Tasks**: Modify existing tasks directly from the task list.
- **Delete Tasks**: Remove tasks with confirmation alerts.
- **View Tasks**: Filter tasks by category and see pending or completed statuses.

## Installation 
### 🔧 Prerequisites  
- **Node.js** (v14 or higher)  
- **npm** or **yarn**  
- **Expo CLI** (for running the client)  
- **MySQL** server 

### Steps
You can clone this repository 
```bash
  git@github.com:Diana-Camz/ToDoApp.git
```
Navigate to the projecto directory:
```bash
  cd ToDoApp
```
Install dependencies:
```bash
  npm install
```
Run the backend server with
```bash
  cd server
  npm run dev
```
And run the frontend application with
```bash
  cd client
  npx expo start
```

## Configure environment variables
Clone .env.template file to .env and add your environment variables

## Technologies used
### client/ (Frontend):
1. Navigation & UI:
- **@react-navigation/native**: Provides core navigation functionalities for managing screens and navigation flow in the app.  
- **@react-navigation/stack**: Enables stack-based navigation, allowing screens to be pushed and popped off the navigation stack.  
- **react-native-gesture-handler**: Handles gesture-based interactions for smooth navigation and UI responsiveness.  
- **react-native-screens**: Optimizes memory usage and performance for navigation by using native navigation components.  
- **react-native-safe-area-context**: Ensures content is rendered within the safe area boundaries of devices (e.g., notches, status bars).

2. Date & Time Management:
- **@react-native-community/datetimepicker**: Provides native date and time pickers for selecting task deadlines.  
- **date-fns**: Offers modern date utility functions for formatting, manipulating, and parsing dates. 

3. UI Enhancements:
- **react-native-switch-selector**: Allows users to toggle between options (e.g., task priority levels) with a switch selector.  
- **react-native-emoji-selector**: Provides an emoji picker for personalizing tasks with emojis.  
- **expo-splash-screen**: Manages and displays a customizable splash screen during app loading.  
- **expo-status-bar**: Provides control over the appearance and behavior of the status bar.  
- **expo-image**: Facilitates optimized image loading and rendering in the application.  

4. Core Libraries:
- **react**: Core library for building user interfaces. 
- **React Native**: Framework for mobile app development.
- **Expo**: Tool to simplify the development and distribution of React Native apps.
- **react-native-reanimated**: Provides enhanced animations and smooth transitions for better user experiences.

### /server (Backend):
1. Core server Setup:
- **express**: Handles server routes and middleware.
- **cors**: Enables cross-origin requests.
- **dotenv**: Manages environment variables.

2. Database:
- **mysql2**: Facilitates MySQL database connections and queries.

3. Development Tools:
**nodemon**: Auto-restarts the server during development.

## Running Tests
To run unit tests (if implemented):
```
npm test
```

## Screenshots
| Home | Detail Task |Create Task | Delete Task |
| -----|-------------|-------------------|-------------|
| ![image](https://github.com/user-attachments/assets/ddd17745-39da-470c-bd98-a6b96caea823)  | ![image](https://github.com/user-attachments/assets/d5871c30-c712-4cdb-a18a-d0c1bc7bf981) | ![image](https://github.com/user-attachments/assets/9b45ea80-209d-4c6f-b5b6-fd63daf82b72) |  ![image](https://github.com/user-attachments/assets/f1cdb5de-ec19-4a1f-bac4-28ed9542e02a) |


## Contributing Guidelines
### How to Contribute:
1. Fork the repository.
2. Create a new branch:
```
git checkout -b feature/your-feature-name
```
3. Make your changes and commit them:
```
git commit -m "feat: Add your feature description"
```
4. Push to your branch:
```
git push origin feature/your-feature-name
```
5. Submit a pull request.

