const ListOfPersons = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

  return (
    <div
      className="container mx-auto mt-8 flex w-[calc(100vw-4rem)] 
                 flex-col items-start justify-center gap-6"
    >
      <h1 className="text-4xl">List of persons</h1>

      <ul className="ms-8 list-disc text-2xl">
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPersons;
