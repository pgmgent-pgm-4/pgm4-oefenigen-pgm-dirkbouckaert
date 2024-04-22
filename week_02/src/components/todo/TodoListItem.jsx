import { FaPen, FaTrash } from 'react-icons/fa';

const TodoListItem = ({
  todo,
  toggleCompleted,
  startEditTodo,
  handleDeleteTodo,
}) => {
  return (
    <li
      className={`${todo.completed ? 'line-through' : ''} my-2 flex 
                  items-center justify-between rounded-lg border border-lime-300 bg-white
                  px-4 py-2 text-lime-700 shadow`}
    >
      <div>
        <input
          type="checkbox"
          value={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
          className="mr-2"
        />
        <span>{todo.text}</span>
      </div>

      <div className="flex gap-2">
        <button
          className="text-orange-500 hover:text-orange-400"
          onClick={() => startEditTodo(todo)}
        >
          <FaPen />
        </button>
        <button
          className="text-red-500 hover:text-red-400"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
