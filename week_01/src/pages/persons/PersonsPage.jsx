import persons from '../../data/persons';
import Person from '../../components/Person';

const PersonsPage = () => {
  return (
    <div
      className="container mx-auto my-8 flex flex 
                 w-[calc(100vw-4rem)] flex-wrap items-stretch justify-center gap-6"
    >
      {persons.map((person) => (
        <Person key={`${person.firstName}-${person.lastName}`} {...person} />
      ))}
    </div>
  );
};

export default PersonsPage;
