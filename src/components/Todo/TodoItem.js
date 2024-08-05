import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, updateTodo, deleteTodo, toggleComplete }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      title,
      description
    });
    setEditing(false);
  };

  return (
    <li >
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {editing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <span>{todo.title}</span>: <span>{todo.description}</span>
          <button onClick={() => setEditing(true)} className="align">Edit</button>
          <button onClick={() => deleteTodo(todo.id)} className="align">Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
