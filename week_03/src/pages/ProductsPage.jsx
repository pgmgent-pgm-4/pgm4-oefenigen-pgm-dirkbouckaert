import FilterableProductTable from '../components/products/FilterableProductTable';

const ProductsPage = () => {
  return (
    <div className="my-container-no-prose">
      <h1>Products</h1>
      <FilterableProductTable />
    </div>
  );
};

export default ProductsPage;
