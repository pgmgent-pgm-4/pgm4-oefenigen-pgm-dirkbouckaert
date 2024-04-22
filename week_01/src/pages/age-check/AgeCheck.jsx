import { useState } from 'react';

const AgeCheck = () => {
  const [age, setAge] = useState(18);

  return (
    <div
      className="container mx-auto mt-8 flex w-[calc(100vw-4rem)] 
                 flex-col items-center justify-center gap-6"
    >
      <p>Leeftijd: {age}</p>
      <input
        type="range"
        name="age"
        min="0"
        max="100"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {age < 18 ? (
        <p className="rounded bg-red-200 p-4 text-center text-xl text-red-500">
          Sorry, je moet 18 jaar of ouder zijn om de inhoud van deze website te
          bekijken.
        </p>
      ) : (
        <p className="rounded bg-green-100 p-4 text-center text-xl text-green-600">
          Je bent oud genoeg om de inhoud van deze website te bekijken.
        </p>
      )}
    </div>
  );
};

export default AgeCheck;
