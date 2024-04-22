import TodoForm from '../components/todo/TodoForm';

const TodoPage = () => {
  return (
    <section className="h-screen bg-lime-100">
      <div className="my-container">
        <h1>Todo</h1>
        <TodoForm />
      </div>
    </section>
  );
};

export default TodoPage;
