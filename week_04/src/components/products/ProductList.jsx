import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
