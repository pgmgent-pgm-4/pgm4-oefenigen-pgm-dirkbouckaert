import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="text-3xl">{count}</div>

      <div>
        <button
          className="my-4 w-10 rounded border bg-green-100 text-xl font-bold transition hover:bg-green-50"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <button
          className="my-4 w-10 rounded border bg-red-100 text-xl font-bold transition hover:bg-red-50"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
      </div>

      <div>
        <button
          className="my-4 w-10 rounded border bg-green-100 text-xl font-bold transition hover:bg-green-50"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="my-4 w-10 rounded border bg-red-100 text-xl font-bold transition hover:bg-red-50"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
