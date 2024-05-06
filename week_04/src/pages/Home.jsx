import Products from '../components/products/Products';
import { useAuthContext } from '../contexts/AuthContext';

function Home() {
  const { user } = useAuthContext();

  return (
    <div className="app-container">
      {!user && <p>You are not logged in. Please login to see the products.</p>}
      {user && <Products />}
    </div>
  );
}

export default Home;
