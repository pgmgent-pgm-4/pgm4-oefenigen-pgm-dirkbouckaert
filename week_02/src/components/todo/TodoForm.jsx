import { FaPlusCircle } from 'react-icons/fa';

const TodoForm = ({ newTodo, handleAddTodo, setNewTodo }) => {
  return (
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
  );
};

export default TodoForm;
