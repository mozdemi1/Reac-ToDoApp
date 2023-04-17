import React from 'react';

const TaskItem = ({ task, handleDelete }) => {
  const { id, title, description } = task;

  return (
    <div className="task-item">
      <div className="task-title">{title}</div>
      <div className="task-description">{description}</div>
      <button className="delete-btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
