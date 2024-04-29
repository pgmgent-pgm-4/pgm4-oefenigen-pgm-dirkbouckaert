import { cn } from '../../lib/utils';

const ProductRow = ({ product }) => {
  return (
    <tr
      className={cn(
        'border border-slate-300',
        !product.stocked && 'text-red-500'
      )}
    >
      <td className="p-2">{product.name}</td>
      <td className="p-2">{product.price}</td>
    </tr>
  );
};

export default ProductRow;
