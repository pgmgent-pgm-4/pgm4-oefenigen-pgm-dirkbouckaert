import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import TodoList from './TodoList';
import TodoEditForm from './TodoEditForm';

const TodoForm = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Feed the cat', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({});

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: newTodo, id: Date.now(), completed: false },
    ]);
    setNewTodo('');
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditTodo = (todo) => {
    setIsEditing(true);
    setEditedTodo(todo);
  };

  const handleEditTodo = () => {
    setIsEditing(false);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editedTodo.id ? { ...todo, text: editedTodo.text } : todo
      )
    );
    setEditedTodo({});
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div>
        <form className="flex items-center gap-2" onSubmit={handleAddTodo}>
          <input
            type="text"
            name="newTodo"
            id="newTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new Todo"
            className="w-full rounded-lg border border-lime-600 px-4 py-2"
          />
          <button type="submit">
            <FaPlusCircle className="text-4xl text-lime-600" />
          </button>
        </form>

        <TodoList
          todos={todos.sort((a, b) => b.id - a.id)}
          toggleCompleted={toggleCompleted}
          handleDeleteTodo={handleDeleteTodo}
          startEditTodo={startEditTodo}
        />
      </div>

      <TodoEditForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editedTodo={editedTodo}
        setEditedTodo={setEditedTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
};

export default TodoForm;
