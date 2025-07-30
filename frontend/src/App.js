import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project 1', tasks: [] },
    { id: 2, name: 'Project 2', tasks: [] },
  ]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [newTask, setNewTask] = useState('');

  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleAddTask = () => {
    if (newTask && selectedProject) {
      const updatedProjects = projects.map(project => {
        if (project.id === selectedProject.id) {
          return { ...project, tasks: [...project.tasks, { id: Date.now(), text: newTask, status: 'To Do' }] };
        }
        return project;
      });
      setProjects(updatedProjects);
      setNewTask('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const taskId = e.dataTransfer.getData('taskId');
    const updatedProjects = projects.map(project => {
      if (project.id === selectedProject.id) {
        const task = project.tasks.find(t => t.id === parseInt(taskId));
        const updatedTasks = project.tasks.filter(t => t.id !== parseInt(taskId));
        if (task) {
          task.status = status;
          return { ...project, tasks: [...updatedTasks, task] };
        }
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <div className="login">
          <h2>Login</h2>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="dashboard">
          <h2>Dashboard</h2>
          <div className="welcome">
            <img
              className="avatar"
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(email.split('@')[0] || 'PM')}&background=2ba5ec&color=fff`}
              alt="avatar"
            />
            Welcome, <span className="username">{email.split('@')[0] || "PM"}</span>!
          </div>
          <div className="projects">
            {projects.map(project => (
              <div key={project.id} className="project" onClick={() => setSelectedProject(project)}>
                {project.name}
              </div>
            ))}
          </div>
          {selectedProject && (
            <div className="kanban">
              <h3>{selectedProject.name}</h3>
              <div className="columns">
                {['To Do', 'In Progress', 'Done'].map(status => (
                  <div key={status} className="column" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, status)}>
                    <h4>{status}</h4>
                    {selectedProject.tasks.filter(task => task.status === status).map(task => (
                      <div key={task.id} className="task" draggable onDragStart={(e) => e.dataTransfer.setData('taskId', task.id)}>
                        {task.text}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New Task" />
              <button onClick={handleAddTask}>Add Task</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
