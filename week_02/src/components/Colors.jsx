import { useState } from 'react';
import { checkColor, getRandomHexColor } from '../lib/utils';

const randomColors = [
  '#FFB6C1',
  '#00008B',
  '#7CFC00',
  '#48D1CC',
  '#FFA07A',
  '#ADFF2F',
  '#90EE90',
  '#778899',
  '#9932CC',
  '#E6E6FA',
];

const Colors = () => {
  const [colors, setColors] = useState(randomColors);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleAddColor = () => {
    setIsBtnDisabled(true);
    setTimeout(() => {
      let newColor = getRandomHexColor();
      checkColor(newColor);
      // console.log('newColor:', newColor);
      setColors((prevColors) => [...prevColors, newColor]);
      setIsBtnDisabled(false);
    }, 50);
  };

  const handleDeleteColor = () => {
    setIsBtnDisabled(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      setColors((prevColors) =>
        prevColors.filter((_, index) => index !== randomIndex)
      );
      setIsBtnDisabled(false);
    }, 50);
  };

  return (
    <>
      <div className="mb-8 flex justify-center gap-4">
        <button
          className={`w-36 rounded-lg px-4 py-2 text-white transition hover:opacity-90
                      ${isBtnDisabled ? 'cursor-not-allowed bg-gray-400 hover:opacity-100' : 'bg-green-400'} `}
          onClick={handleAddColor}
          disabled={isBtnDisabled}
        >
          Add a color
        </button>

        <button
          className={`w-36 rounded-lg px-4 py-2 text-white transition hover:opacity-90
                      ${isBtnDisabled ? 'cursor-not-allowed bg-gray-400 hover:opacity-100' : 'bg-red-400'}`}
          onClick={handleDeleteColor}
          disabled={isBtnDisabled}
        >
          Delete a color
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <div
            className="h-24 w-24 rounded-full"
            key={color}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Colors;
