const ProductCategoryRow = ({ category }) => {
  return (
    <tr className="bg-slate-200 font-semibold">
      <td colSpan="2" className="p-2">
        {category}
      </td>
    </tr>
  );
};

export default ProductCategoryRow;
