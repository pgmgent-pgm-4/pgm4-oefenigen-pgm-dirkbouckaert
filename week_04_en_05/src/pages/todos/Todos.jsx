import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../graphql/queries';
import TodoList from '../../components/todos/TodoList';

const Todos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="app-container">
      <TodoList todos={data.todos} />
    </div>
  );
};

export default Todos;
