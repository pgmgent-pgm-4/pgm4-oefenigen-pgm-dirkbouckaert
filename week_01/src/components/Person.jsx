import { useEffect, useState } from 'react';

const Person = ({ firstName, lastName, pictureUrl, age, height, weight }) => {
  const [bmi, setBmi] = useState(null);

  useEffect(() => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmi);
    }
  }, [height, weight]);

  return (
    <article className="flex flex-col items-center rounded border p-6 shadow ">
      {pictureUrl && (
        <img
          src={pictureUrl}
          alt={`${firstName} ${lastName}`}
          className="aspect-square h-32 w-32 rounded-full object-cover object-center"
        />
      )}
      <h3 className="text-lg font-bold">
        {firstName} {lastName}
      </h3>
      {age && <p>Leeftijd: {age}</p>}
      {height && <p>Lengte: {height}</p>}
      {weight && <p>Gewicht: {weight}</p>}
      {bmi && <p>BMI: {bmi}</p>}
    </article>
  );
};

export default Person;
