import React from 'react';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';

function TaskList({ tasks, handleAddTask, handleDeleteTask, handleToggleComplete }) {
  const sortedTasks = [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div>
      <AddTaskForm handleAddTask={handleAddTask} />
      <ul className="task-list">
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleToggleComplete={handleToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
