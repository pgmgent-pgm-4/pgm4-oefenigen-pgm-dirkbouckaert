const ProductSearchBar = ({ setSearch, inStockOnly, setInStockOnly }) => {
  return (
    <div className="my-4">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="mb-2 w-full max-w-xs rounded-md border border-slate-300 p-2 text-slate-700"
      />
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="inStock"
          id="inStock"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        <label htmlFor="inStock">Only show products in Stock</label>
      </div>
    </div>
  );
};

export default ProductSearchBar;
