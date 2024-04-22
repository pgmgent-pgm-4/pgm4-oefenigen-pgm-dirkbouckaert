import { useState } from 'react';

const ShowMessage = () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div
      className="container mx-auto mt-8 flex w-[calc(100vw-4rem)] 
                 flex-col items-center justify-center gap-6"
    >
      <label className="mb-5 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={showMessage}
          onChange={() => setShowMessage(!showMessage)}
        />
        <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
        <span className="ms-3 text-lg font-medium text-gray-900 dark:text-gray-300">
          {showMessage ? 'Toon bericht' : 'Geen bericht'}
        </span>
      </label>

      {showMessage && (
        <p className="rounded bg-blue-100 p-4 text-center text-xl text-blue-600">
          Dit is een optioneel bericht dat alleen wordt weergegeven als
          showMessage true is.
        </p>
      )}
    </div>
  );
};

export default ShowMessage;
