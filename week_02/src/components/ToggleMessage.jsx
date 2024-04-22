import { useState } from 'react';

const ToggleMessage = () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <>
      {showMessage ? (
        <p className="text-2xl text-green-500">Dit is mijn bericht</p>
      ) : (
        <p className="text-2xl text-red-500">Bericht is verborgen</p>
      )}

      <button
        className={`rounded ${showMessage ? 'bg-green-500' : 'bg-red-500'} px-4 py-2 text-white transition hover:opacity-85`}
        onClick={() => setShowMessage(!showMessage)}
      >
        {showMessage ? 'Verberg bericht' : 'Toon bericht'}
      </button>
    </>
  );
};

export default ToggleMessage;
