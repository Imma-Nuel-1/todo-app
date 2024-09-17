import  { useState } from "react";

function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  // Toggle complete status
  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  // Handle form submission for editing task
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...task, name, description });
    setIsEditing(false);
  };

  // Handle editing toggle
  const handleEdit = () => setIsEditing(!isEditing);

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h3
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.name}
          </h3>
          <p>{task.description}</p>
          <button onClick={toggleComplete}>
            {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
          </button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
