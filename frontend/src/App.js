import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// URL untuk API backend
const API_URL = 'http://localhost:3001/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks dari backend saat komponen dimuat
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_URL}/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Handle submit form untuk menambah task baru
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    try {
      const response = await axios.post(`${API_URL}/tasks`, { title: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Handle toggle status complete/incomplete
  const handleToggleTask = async (id, isCompleted) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${id}`, { is_completed: !isCompleted });
      setTasks(tasks.map(task => (task.id === id ? response.data : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Handle hapus task
  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <form onSubmit={handleAddTask} className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Tambahkan tugas baru..."
          />
          <button type="submit">Tambah</button>
        </form>
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={task.is_completed ? 'completed' : ''}>
              <span onClick={() => handleToggleTask(task.id, task.is_completed)}>
                {task.title}
              </span>
              <button onClick={() => handleDeleteTask(task.id)} className="delete-btn">
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;