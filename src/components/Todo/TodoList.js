import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { ToastContainer, toast } from 'react-toastify';

import './TodoList.css';



const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    

        
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    
    
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
      
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const sortByDate = ()=>{
    // TODOs are by default sorted
    const sortedTodo = [...todos].reverse();
    setTodos(sortedTodo);

  }

  return (
    <div className='App'>
      <h2>To-Do List</h2>
      <TodoForm addTodo={addTodo} />
      <br/>
      <button onClick={sortByDate}>Sort</button>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
