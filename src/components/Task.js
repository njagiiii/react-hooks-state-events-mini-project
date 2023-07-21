import React from "react";

function Task({task, onTaskDelete}) {
  const handleDeleteClick = () => {
    onTaskDelete(task.id);
  }
  return (
    <div className="task">
      <div>{task.text}</div>
      <div className="label">{task.category}</div>
      <button onClick={handleDeleteClick} className="delete">Delete</button>
    </div>
  );
}

export default Task;
