import { useState } from 'react';
import ProductDetails from './ProductDetails';

const ProductListItem = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <li
        className="my-8 flex cursor-pointer items-center gap-6 rounded-lg border p-6 dark:bg-white dark:text-black"
        onClick={() => setShowModal(!showModal)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-24 rounded-lg"
        />
        {product.title}
      </li>
      {showModal && (
        <ProductDetails product={product} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default ProductListItem;
