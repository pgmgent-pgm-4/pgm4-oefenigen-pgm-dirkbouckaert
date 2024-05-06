import { useState } from 'react';
import { API_URL_USERS } from '../../lib/consts';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${API_URL_USERS}?email=${email}&password=${password}`
    );
    const data = await res.json();
    if (!data || data.length === 0)
      return setError({ message: 'Invalid credentials' });
    const user = data[0];
    login(user);
    navigate('/');
  };

  return (
    <main className="app-container">
      <h1 className="text-2xl font-bold">Login</h1>

      {error && <p className="my-6 text-red-500">{error.message}</p>}

      <form onSubmit={handleSubmit} className="my-8 max-w-md space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-lg"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="rounded-lg"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
