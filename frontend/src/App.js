import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://remote-pm-backend.onrender.com';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [newProject, setNewProject] = useState('');
  const [newTask, setNewTask] = useState('');

  // Fetch projects from the backend API when user logs in
  useEffect(() => {
    if (isLoggedIn) {
      axios.get(`${API_URL}/projects`)
        .then(res => setProjects(res.data))
        .catch(() => setProjects([]));
    }
  }, [isLoggedIn]);

  // Add a new project (to backend)
  const handleAddProject = () => {
    if (!newProject || !email) return;
    axios.post(`${API_URL}/projects`, {
      name: newProject,
      created_by: email
    })
      .then(res => {
        setProjects([...projects, res.data]);
        setNewProject('');
      })
      .catch(() => alert('Could not add project.'));
  };

  const handleLogin = () => {
    if (email && password) setIsLoggedIn(true);
  };

  // For demo: tasks are local to the session for now
  const handleAddTask = () => {
    if (newTask && selectedProject) {
      const updatedProjects = projects.map(project => {
        if (project.id === selectedProject.id) {
          return { ...project,
                   tasks: [...(project.tasks || []), { id: Date.now(), text: newTask, status: 'To Do' }] };
        }
        return project;
      });
      setProjects(updatedProjects);
      setNewTask('');
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, status) => {
    const taskId = e.dataTransfer.getData('taskId');
    const updatedProjects = projects.map(project => {
      if (project.id === selectedProject.id) {
        const task = (project.tasks || []).find(t => t.id === parseInt(taskId));
        const updatedTasks = (project.tasks || []).filter(t => t.id !== parseInt(taskId));
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
          {/* NEW PROJECT FIELD */}
          <div className="add-project">
            <input
              type="text"
              value={newProject}
              onChange={e => setNewProject(e.target.value)}
              placeholder="New Project Name"
              style={{ width: "60%", marginRight: "8px" }}
            />
            <button onClick={handleAddProject}>Add Project</button>
          </div>
          <div className="projects">
            {projects.map(project => (
              <div
                key={project.id}
                className="project"
                onClick={() => setSelectedProject(project)}
              >
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
                    {(selectedProject.tasks || []).filter(task => task.status === status).map(task => (
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
