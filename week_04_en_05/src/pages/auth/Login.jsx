import { useEffect, useState } from 'react';
import { API_URL_USERS } from '../../lib/consts';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuthContext();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState();

  useEffect(() => {
    if (user) navigate('/');
  }, []);

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${API_URL_USERS}?email=${formData.email}&password=${formData.password}`
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

      <LoginForm
        formData={formData}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default Login;
