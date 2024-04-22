import HelloWorld from '../../components/HelloWorld';

const HelloWorldPage = () => {
  return (
    <div
      className="container mx-auto mt-8 flex w-[calc(100vw-4rem)] 
                 flex-col items-start justify-center gap-6"
    >
      <HelloWorld />
      <HelloWorld name="Evelien" />
      <HelloWorld name="Dirk" />
    </div>
  );
};

export default HelloWorldPage;
