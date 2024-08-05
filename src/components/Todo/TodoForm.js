import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTodo({
        id: uuidv4(),
        title,
        description,
        completed: false
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className='form-style'>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <br/>
        <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
        <br/>
        <button type="submit">Add To-Do</button>
        </form>
    </div>
  );
};

export default TodoForm;
