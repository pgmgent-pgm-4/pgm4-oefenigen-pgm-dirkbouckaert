// Data
import { useEffect, useState } from 'react';
import products from '../../data/products.json';

// Components
import ProductSearchBar from './ProductSearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
  const categories = [...new Set(products.map((product) => product.category))];
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search, setSearch] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    // Filter products
    const filtered = products.filter((product) => {
      if (inStockOnly && !product.stocked) {
        return false;
      }
      if (
        search &&
        !product.name.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
    setFilteredProducts(filtered);
  }, [search, inStockOnly]);

  return (
    <section>
      <ProductSearchBar
        setSearch={setSearch}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        categories={categories}
        filteredProducts={filteredProducts}
      />
    </section>
  );
};

export default FilterableProductTable;
