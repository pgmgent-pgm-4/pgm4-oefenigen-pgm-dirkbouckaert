const TodoListItem = ({ todo }) => {
  return (
    <li className="my-4 rounded-lg border border-blue-600 p-4 dark:border-blue-400">
      <h2 className="text-blue-600 dark:text-blue-400">{todo.title}</h2>
      <p className="text-slate-500 dark:text-slate-400">{todo.description}</p>
    </li>
  );
};

export default TodoListItem;
