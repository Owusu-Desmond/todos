import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const Todolist = ({
  newTodos, handleCompleted, deleteTask, clearAllCompleted,
  savedTodos, updateTodos, deleteAllTodos,
}) => (
  <div className="todo-list">
    {!newTodos.length ? <div className="empty-list">You have no tasks to do.</div>
      : newTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCompleted={handleCompleted}
          deleteTask={deleteTask}
          savedTodos={savedTodos}
          updateTodos={updateTodos}
        />
      ))}
    { newTodos.length ? (
      <div className="delete-complete-btn-container">
        <button type="button" className="clear-completed-btn" onClick={clearAllCompleted}>Clear completed</button>
        <button type="button" className="delete-all-btn" onClick={deleteAllTodos}>Delete All</button>
      </div>
    ) : '' }
  </div>
);

// set propTypes validation for Todolist
Todolist.propTypes = {
  newTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  clearAllCompleted: PropTypes.func.isRequired,
  savedTodos: PropTypes.func.isRequired,
  updateTodos: PropTypes.func.isRequired,
  deleteAllTodos: PropTypes.func.isRequired,
};

export default Todolist;
