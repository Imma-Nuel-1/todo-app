import  { useState } from "react";

function TaskForm({ addTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Handles form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      const newTask = {
        id: Date.now(),
        name,
        description,
        completed: false,
      };
      addTask(newTask);
      setName("");
      setDescription("");
    } else {
      alert("Please fill out both fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
