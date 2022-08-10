import React, { useState } from 'react';
import Todolist from '../components/todoList';

const TodoApp = () => {
// set initial state
  const [todo, setTodo] = useState({});

  // get saved todos form the localStorage
  const savedTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

  // set a state for the todos
  const [newTodos, setNewTodos] = useState(savedTodos);

  // save todos to the localStorage
  const updateTodos = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // update todos to storage whenever the app state changes
  updateTodos(newTodos);

  const handleChange = (e) => {
    setTodo({
      id: newTodos.length,
      task: e.target.value.trim(),
      completed: false,
    });
  };
  // add new todo to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodos([...newTodos, todo]);
    setTodo({ id: newTodos.length, task: '', completed: false });
  };

  // set a todo to completed
  const handleCompleted = (todoId) => {
    setNewTodos(newTodos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  // delete all completed todo from the list
  const clearAllCompleted = () => {
    setNewTodos(newTodos.filter((todo) => todo.completed === false));
  };

  // delete a todo from the list
  const deleteTask = (todoId) => {
    setNewTodos(newTodos.filter((todo) => todo.id !== todoId));
  };
  return (
    <section>
      <h1 className="App-title">Todos</h1>
      <div className="todo-content">
        <form onSubmit={handleSubmit}>
          <input className="App-input" type="text" value={todo.task} onChange={handleChange} placeholder="What needs to be done?" required />
        </form>
        {' '}
        <Todolist
          newTodos={newTodos}
          handleCompleted={handleCompleted}
          deleteTask={deleteTask}
          clearAllCompleted={clearAllCompleted}
          savedTodos={savedTodos}
          updateTodos={updateTodos}
        />
      </div>
    </section>
  );
};

export default TodoApp;
