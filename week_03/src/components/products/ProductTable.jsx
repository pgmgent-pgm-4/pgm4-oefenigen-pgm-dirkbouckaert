// Components
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ categories, filteredProducts }) => {
  const rows = [];

  for (const category of categories) {
    const products = filteredProducts.filter(
      (product) => product.category === category
    );
    if (products.length > 0) {
      rows.push(<ProductCategoryRow key={category} category={category} />);
      for (const product of products) {
        rows.push(<ProductRow key={product.name} product={product} />);
      }
    }
  }

  return (
    <table className="w-full max-w-lg border border-slate-300 text-left">
      <thead className="bg-slate-300">
        <tr className="border border-slate-300">
          <th className="p-2">Name</th>
          <th className="p-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows
        ) : (
          <tr>
            <td className="p-2">No products found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
