import useFetch from '../../hooks/useFetch';
import ProductList from './ProductList';

const Products = () => {
  const url = 'https://fakestoreapi.com/products';

  const { data: products, isLoading, error } = useFetch(url);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Products</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {products && <ProductList products={products} />}
    </div>
  );
};

export default Products;
