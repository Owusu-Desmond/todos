import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoItem = ({
  todo, handleCompleted, deleteTask, savedTodos, updateTodos,
}) => {
  // set a state for the todo
  const [currentTodo, setCurrentTodo] = useState(todo);
  // set initial state for the edit mode
  const [editMode, setEditMode] = useState(false);
  // update edited mode to true when the todo about to be edited is clicked
  const handleEditingMode = () => {
    setEditMode(true);
  };
  // update the edited todos to the list and update the localStorage
  const updateEdited = (currentTodo) => {
    const editedTodoIndex = savedTodos().findIndex((t) => t.id === currentTodo.id);
    const newTodos = savedTodos();
    newTodos.splice(editedTodoIndex, 1, currentTodo);
    updateTodos(newTodos);
  };

  // save edited todo on blur event and prevent enter key from getting triggered
  const saveEditedTask = (e) => {
    updateEdited(currentTodo);
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
      setEditMode(false);
    }
  };
  // return the todo item
  return (
    <div className="todo-item">
      <div className="checkbox-task">
        <input type="checkbox" checked={todo.completed} onChange={() => handleCompleted(todo.id)} />
        <textarea
          title="Click to edit"
          className={`${todo.completed === true ? 'completed' : ''}`}
          onKeyUp={saveEditedTask}
          onKeyDown={saveEditedTask}
          onBlur={() => setEditMode(false)}
          onChange={(e) => setCurrentTodo({ ...currentTodo, task: e.target.value })}
          value={currentTodo.task}
          spellCheck={editMode}
          onClick={handleEditingMode}
          placeholder="What needs to be done?"
        />
      </div>
      <button type="button" className="delete-btn" onClick={() => deleteTask(todo.id)}>&times;</button>
    </div>
  );
};

// set prop validation for the component
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  savedTodos: PropTypes.func.isRequired,
  updateTodos: PropTypes.func.isRequired,
};

export default TodoItem;
