import Products from '../components/products/Products';
import { useAuthContext } from '../contexts/AuthContext';

function Home() {
  const { user } = useAuthContext();

  return (
    <div className="app-container">
      {!user && <p>You are not logged in. Please login to see the products.</p>}
      {user && (
        <>
          <p className="mb-8 mt-4 rounded-lg bg-slate-100 p-4 text-3xl">
            Welcome, {user.name}
          </p>
          <Products />
        </>
      )}
    </div>
  );
}

export default Home;
