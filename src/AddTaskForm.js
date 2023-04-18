import React, { useState } from 'react';

function AddTaskForm({ handleAddTask }) {
  const [task, setTask] = useState({ name: '', date: '', completed: false });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask(task);
    setTask({ name: '', date: '', completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" name="name" value={task.name} onChange={handleInputChange} />
      </label>
      <label>
        Task Date:
        <input type="date" name="date" value={task.date} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
