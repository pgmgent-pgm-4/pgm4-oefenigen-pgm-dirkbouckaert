const ProductDetails = ({ product, setShowModal }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
      aria-hidden="true"
    >
      <div className="w-[calc(100vw-4rem)] max-w-lg rounded-lg bg-white p-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {product.title}
        </h3>
        <div className="my-6 flex items-center gap-6">
          <img
            src={product.image}
            alt={product.title}
            className="mx-auto h-32"
          />
          <p className="text-sm text-gray-500">{product.description}</p>
        </div>
        <button
          type="button"
          className="float-right rounded-md border border border-gray-500 px-4 py-2 
                     font-medium shadow-sm transition hover:scale-105 dark:text-black"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
