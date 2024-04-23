import { useState } from 'react';
import { checkColor, getRandomHexColor } from '../../lib/utils';
import Color from './Color';

const randomColors = [
  '#FFB6C1',
  '#00008B',
  '#7CFC00',
  '#48D1CC',
  // '#FFA07A',
  // '#ADFF2F',
  // '#90EE90',
  // '#778899',
  // '#9932CC',
  // '#E6E6FA',
];

const Colors = () => {
  const [colors, setColors] = useState(randomColors);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleAddColor = () => {
    if (isBtnDisabled) return;
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
    if (isBtnDisabled) return;
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
          // className={`w-36 rounded-lg px-4 py-2 text-white transition hover:opacity-90
          //             ${isBtnDisabled ? 'cursor-not-allowed bg-gray-400 hover:opacity-100' : 'bg-green-400'} `}
          className="w-36 rounded-lg bg-green-400 px-4 py-2 text-white transition hover:opacity-90"
          onClick={handleAddColor}
          disabled={isBtnDisabled}
        >
          Add a color
        </button>

        <button
          className="w-36 rounded-lg bg-red-400 px-4 py-2 text-white transition hover:opacity-90"
          onClick={handleDeleteColor}
          disabled={isBtnDisabled}
        >
          Delete a color
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <Color key={color} color={color} />
        ))}
      </div>
    </>
  );
};

export default Colors;
