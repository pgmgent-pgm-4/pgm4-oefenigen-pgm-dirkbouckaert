const TodoListItem = ({ todo }) => {
  return (
    <li className="my-4 rounded-lg border border-blue-600 p-4">
      <h2 className="text-blue-600">{todo.title}</h2>
      <p className="text-slate-500">{todo.description}</p>
    </li>
  );
};

export default TodoListItem;
