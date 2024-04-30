import Todo from '../components/todo/Todo';

const TodoPage = () => {
  return (
    <section className="h-screen bg-lime-100">
      <div className="my-container">
        <h1>Todo</h1>
        <Todo />
      </div>
    </section>
  );
};

export default TodoPage;
