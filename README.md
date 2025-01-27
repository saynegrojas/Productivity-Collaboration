# Productivity & Collaboration App

A simple application that enables users to manage tasks in real time.

## Features

- Real-time collaboration tools
- Task management and tracking
- Team communication channels

## Getting Started

### Prerequisites

- Node.js 16 or higher
- Modern web browser

### Installation

1. Clone the repository:

````bash
git clone https://github.com/saynegrojas/productivity-collaboration.git

Copy

Apply

README.md
2. Install dependencies:
```bash
cd productivity-collaboration && npm install

Copy

Apply

README.md
3. Configure environment variables:
- Copy `.env.example` to `.env`
- VITE_ENV=local
- PORT=4000
- Update the variables with your settings

4. Start the server:
```bash
  node server.js
5. Start the applicaiton:
  npm run dev
6. Open the application:
   http://localhost:5173/

Copy

Apply

README.md
## Usage

1. Type a task in the input field and add a new task
2. Once a task is added, either complete or delete a task
3. Open new tab and see new task display on both tabs
4. Start collaborating in real-time

# Solution and Thought Process

## Thought process
Firstly, I need to understand the requirements where users should be able to add a task, mark tasks as completed, and delete tasks to a shared list, meaning, real-time updates that change made by one user should instantly reflect for all connected users (separate tabs). Also, No backend is required, so simulate a socket server locally.
Secondly, the technology required for the frontend is React and server is socket for handling real-time communction. Also, Use socket.io-client in React app to connect to the socket server.
Thirdly, simulating real-time communication with a local socket.io server will act as the “backend” for managing tasks and broadcasting updates to all connected clients. The server will maintain the shared task list in memory (no database required).
Lastly, the data flow is when a user performs an action (add, complete, delete), the client emits an event to the socket server. The server updates the shared task list and broadcasts the updated list to all connected clients, then clients listen for updates and re-render the task list in real time.


## Solution
I created a VITE React application for its development and build speeds. 
For the frontend, I displayed task list and provided actions for completing and deleting tasks. Also, I created an input field for adding a task, and functionality to emit and event to the server to add a task. I built the application with Typescript to ensure type saftey and improve code maintainability. To enable a communction with the socket server, I used socket.io-client. For the UI, I utilized TailwindCSS to add classes more efficiently, Material UI for built components, and added themed toggle functionality. Lastly, I maintained separation of concerns throughout the whole applicaiton.
As for the socket server, I created a server that listens for events from clients (e.g., `addTask`, `completeTask`, `deleteTask`) and broadcasts updates to all connected clients. I created a service for task for all the events to be utilized by the controller that handles task-related events from the client. 
So, the event flow of the application is the client emits events to the socket server, then the server processes the event, updates the task list, and emits a task event with the updated list to all clients.Finally, clients listen for tasks events and update their UI accordingly.

# Screenshots:

## Access screen shot in the following directory:
src/assets

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email saynegrojas1@gmail.com.
````
