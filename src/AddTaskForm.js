import React, { useState } from 'react';

function AddTaskForm(props) {
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');

  const handleAddClick = (e) => {
    e.preventDefault();
    if (!taskName || !date) {
      alert('Please enter a task name and date');
      return;
    }
    const newTask = {
      name: taskName,
      date: date,
      completed: false,
    };
    props.handleAddTask(newTask);
    setTaskName('');
    setDate('');
  };

  return (
    <form className="add-task-form">
      <label htmlFor="taskName">Task name:</label>
      <input
        type="text"
        id="taskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleAddClick}>Add Task</button>
    </form>
  );
}

export default AddTaskForm;
