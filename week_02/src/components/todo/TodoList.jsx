import TodoListItem from './TodoListItem';

const TodoList = ({
  todos,
  toggleCompleted,
  startEditTodo,
  handleDeleteTodo,
}) => {
  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          handleDeleteTodo={handleDeleteTodo}
          startEditTodo={startEditTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
