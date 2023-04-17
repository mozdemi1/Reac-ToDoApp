import React from 'react';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';

function TaskList({ tasks, handleAddTask, handleDeleteTask, handleToggleComplete }) {
  return (
    <div>
      <AddTaskForm handleAddTask={handleAddTask} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
