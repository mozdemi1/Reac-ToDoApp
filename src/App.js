import React, { useState } from 'react';
import TaskList from './TaskList';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskList
        tasks={tasks}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
        handleToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default App;
