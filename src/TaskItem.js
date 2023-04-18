import React from 'react';

function TaskItem({ task, handleDeleteTask, handleToggleComplete }) {
  const { id, name, completed, date } = task;

  const handleCompleteChange = () => {
    handleToggleComplete(id);
  };

  const handleDeleteClick = () => {
    handleDeleteTask(id);
  };

  return (
    <li className="task-item">
      <div>
        <span className="task-name">{name}</span>
        {date && <span className="task-date"> ({new Date(date).toDateString()})</span>}
      </div>
      <div>
        <input type="checkbox" checked={completed} onChange={handleCompleteChange} />
        <button className="delete-btn" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
